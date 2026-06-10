/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import { Routes, Route, useNavigate, useLocation, useParams, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { SplashScreen } from './components/SplashScreen';
import { BottomNav } from './components/BottomNav';
import { InstallPrompt } from './components/InstallPrompt';
import { Profile } from './types';
import { supabase } from './lib/supabase';
import { supabaseService } from './lib/supabaseService';
import { initializeDB } from './db/dbStorage';

const HomeView = lazy(() => import('./components/HomeView'));
const SearchView = lazy(() => import('./components/SearchView'));
const ProfileDetailsView = lazy(() => import('./components/ProfileDetailsView'));
const DashboardView = lazy(() => import('./components/DashboardView'));
const AdminView = lazy(() => import('./components/AdminView'));
const AuthView = lazy(() => import('./components/AuthView'));
const ParaProfissionaisView = lazy(() => import('./components/ParaProfissionaisView'));
const PlanosView = lazy(() => import('./components/PlanosView'));
const MonetizationView = lazy(() => import('./components/MonetizationView'));
const SeoLocalView = lazy(() => import('./components/SeoLocalView'));
const AboutView = lazy(() => import('./components/AboutView'));
const TermsView = lazy(() => import('./components/TermsView'));
const PrivacyView = lazy(() => import('./components/PrivacyView'));
const ContactView = lazy(() => import('./components/ContactView'));
const HowItWorksView = lazy(() => import('./components/HowItWorksView'));

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUser, setCurrentUser] = React.useState<Profile | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    initializeDB();

    const checkUser = async () => {
      try {
        const user = await supabaseService.getCurrentUser();
        setCurrentUser(user);
      } catch (e) {
        console.error('Error fetching user:', e);
      } finally {
        setLoading(false);
      }
    };

    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        const user = await supabaseService.getCurrentUser();
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const onNavigate = (view: string, params: any = {}) => {
    const viewToPath: any = {
      home: '/',
      search: '/search',
      profile: '/profissional',
      dashboard: '/dashboard',
      admin: '/admin',
      auth: '/auth',
      'para-profissionais': '/para-profissionais',
      planos: '/planos',
      anunciar: '/anunciar',
      sobre: '/sobre',
      termos: '/termos',
      privacidade: '/privacidade',
      contato: '/contato',
      'como-funciona': '/como-funciona'
    };

    const basePath = viewToPath[view] || '/';
    let target = basePath;

    if (view === 'profile' && params.id) {
      target = `${basePath}/${params.id}`;
    } else if (Object.keys(params).length > 0) {
      const query = new URLSearchParams(params).toString();
      target = `${basePath}?${query}`;
    }

    navigate(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onLogout = async () => {
    await supabaseService.signOut();
    setCurrentUser(null);
    onNavigate('home');
  };

  const onAuthSuccess = (user: Profile) => {
    setCurrentUser(user);
  };

  const currentView = (() => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path.startsWith('/search')) return 'search';
    if (path.startsWith('/profissional')) return 'profile';
    if (path.startsWith('/dashboard')) return 'dashboard';
    if (path.startsWith('/admin')) return 'admin';
    if (path.startsWith('/auth')) return 'auth';
    if (path.startsWith('/para-profissionais')) return 'para-profissionais';
    if (path.startsWith('/planos')) return 'planos';
    if (path.startsWith('/anunciar')) return 'anunciar';
    return '';
  })();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="w-16 h-16 bg-brand-yellow rounded-2xl flex items-center justify-center mx-auto shadow-2xl shadow-brand-yellow/20 animate-pulse">
            <span className="text-black font-black text-4xl font-display">T</span>
          </div>
          <p className="text-[10px] font-black tracking-[0.5em] text-brand-yellow uppercase">Sincronizando</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white flex flex-col justify-between selection:bg-brand-yellow selection:text-black font-sans overflow-x-hidden">
      <SplashScreen />

      <Header
        currentUser={currentUser}
        onNavigate={onNavigate}
        onLogout={onLogout}
        currentView={currentView}
      />

      <main className="flex-grow pb-24 md:pb-0">
        <Suspense fallback={
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-brand-yellow/20 border-t-brand-yellow rounded-full animate-spin" />
          </div>
        }>
          <Routes>
            <Route path="/" element={<HomeView onNavigate={onNavigate} />} />

            <Route path="/search" element={<SearchViewWrapper onNavigate={onNavigate} />} />

            <Route path="/profissional/:id" element={
              <ProfileWrapper currentUser={currentUser} onNavigate={onNavigate} />
            } />

            <Route path="/dashboard" element={
              currentUser ? (
                <DashboardView
                  currentUser={currentUser}
                  onNavigate={onNavigate}
                  onLogout={onLogout}
                  viewParams={{}}
                />
              ) : <Navigate to="/auth?mode=login" />
            } />

            <Route path="/admin" element={
              currentUser?.role === 'admin' ? (
                <AdminView onNavigate={onNavigate} />
              ) : <Navigate to="/" />
            } />

            <Route path="/auth" element={
              <AuthWrapper onAuthSuccess={onAuthSuccess} onNavigate={onNavigate} />
            } />

            <Route path="/para-profissionais" element={<ParaProfissionaisView onNavigate={onNavigate} />} />
            <Route path="/planos" element={<PlanosView onNavigate={onNavigate} />} />
            <Route path="/anunciar" element={<MonetizationView onNavigate={onNavigate} />} />

            <Route path="/sp/:serviceSlug/:citySlug" element={<SeoLocalWrapper onNavigate={onNavigate} />} />

            <Route path="/sobre" element={<AboutView />} />
            <Route path="/termos" element={<TermsView />} />
            <Route path="/privacidade" element={<PrivacyView />} />
            <Route path="/contato" element={<ContactView />} />
            <Route path="/como-funciona" element={<HowItWorksView />} />

            <Route path="/:slug" element={<SeoDynamicWrapper onNavigate={onNavigate} />} />
          </Routes>
        </Suspense>
      </main>

      <Footer onNavigate={onNavigate} />
      <InstallPrompt />
      <BottomNav activeView={currentView} onNavigate={onNavigate} />
    </div>
  );
}

function SearchViewWrapper({ onNavigate }: { onNavigate: any }) {
  const params = new URLSearchParams(useLocation().search);
  return (
    <SearchView
      initialCategoryId={params.get('categoryId') || undefined}
      initialCityId={params.get('cityId') || undefined}
      initialQuery={params.get('query') || undefined}
      onNavigate={onNavigate}
    />
  );
}

function ProfileWrapper({ currentUser, onNavigate }: { currentUser: any, onNavigate: any }) {
  const { id } = useParams();

  return (
    <ProfileDetailsView
      professionalId={id!}
      currentUser={currentUser}
      onNavigate={onNavigate}
    />
  );
}

function AuthWrapper({ onAuthSuccess, onNavigate }: { onAuthSuccess: any, onNavigate: any }) {
  const params = new URLSearchParams(useLocation().search);

  return (
    <AuthView
      initialMode={params.get('mode') as any || 'login'}
      onAuthSuccess={onAuthSuccess}
      onNavigate={onNavigate}
    />
  );
}

function SeoLocalWrapper({ onNavigate }: { onNavigate: any }) {
  const { serviceSlug, citySlug } = useParams();

  return (
    <SeoLocalView
      serviceSlug={serviceSlug}
      citySlug={citySlug}
      onNavigate={onNavigate}
    />
  );
}

function SeoDynamicWrapper({ onNavigate }: { onNavigate: any }) {
  const { slug } = useParams();

  React.useEffect(() => {
    const timer = setTimeout(() => onNavigate('search', { query: slug?.replace(/-/g, ' ') }), 700);
    return () => clearTimeout(timer);
  }, [slug, onNavigate]);

  return (
    <div className="pt-32 text-center space-y-4 min-h-[60vh] flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-display font-black italic uppercase">
        Buscando por “{slug?.replace(/-/g, ' ')}”
      </h1>

      <p className="text-slate-500">
        Estamos localizando profissionais próximos para você.
      </p>

      <div className="w-10 h-10 border-2 border-brand-yellow border-t-transparent rounded-full animate-spin mx-auto mt-8" />
    </div>
  );
}
