import React from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Utensils, 
  Camera, 
  Info, 
  Train, 
  CloudRain, 
  ShieldCheck, 
  Heart,
  Coffee,
  Music,
  Beer
} from 'lucide-react';

const Section = ({ title, children, icon: Icon, className = "" }: { title: string, children: React.ReactNode, icon?: any, className?: string }) => (
  <section className={`mb-12 break-inside-avoid ${className}`}>
    <div className="flex items-center gap-3 mb-6">
      {Icon && <Icon className="w-6 h-6 text-chicago-red" />}
      <h2 className="text-3xl font-display font-bold tracking-tight text-zinc-900 uppercase">{title}</h2>
    </div>
    <div className="space-y-4 text-zinc-700 leading-relaxed">
      {children}
    </div>
  </section>
);

const PhotoCard = ({ src, caption, className = "" }: { src: string, caption: string, className?: string }) => (
  <div className={`relative overflow-hidden rounded-2xl shadow-lg group ${className}`}>
    <img 
      src={src} 
      alt={caption} 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      referrerPolicy="no-referrer"
    />
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
      <p className="text-white text-sm font-medium">{caption}</p>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Booklet Content */}
      <div 
        className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Hero Section */}
        <header className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <img 
            src="https://picsum.photos/seed/chicago-skyline/1200/800" 
            alt="Chicago Skyline" 
            className="absolute inset-0 w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
          <div className="relative z-10 text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-display font-extrabold text-white mb-4 tracking-tighter">
                CHICAGO
              </h1>
              <p className="text-xl md:text-2xl text-zinc-200 font-medium tracking-wide uppercase">
                Not just a city, but a vibe
              </p>
              <div className="mt-8 flex justify-center gap-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-3 h-3 rounded-full bg-chicago-red" />
                ))}
              </div>
            </motion.div>
          </div>
        </header>

        <div className="p-8 md:p-16 space-y-16">
          {/* Intro */}
          <div className="max-w-2xl">
            <p className="text-2xl text-zinc-800 font-medium leading-snug italic border-l-4 border-chicago-red pl-6">
              "If you think Chicago is just about skyscrapers and deep-dish pizza, you’re missing the point. This city has character. It’s loud, windy, a little rough around the edges — but that’s exactly why people fall in love with it"
            </p>
          </div>

          {/* What you'll enjoy */}
          <Section title="What you’ll actually enjoy" icon={Camera}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                    <Coffee className="w-5 h-5 text-chicago-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Lake Michigan Mornings</h3>
                    <p>Start your day early and go to Lake Michigan. Locals don’t rush there — they walk, sit, drink coffee, and just watch the water. It doesn’t feel like a big city there. It feels calm</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-zinc-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Millennium Park</h3>
                    <p>Then head to Millennium Park, but don’t spend too long taking photos of “The Bean”. Yeah, it’s cool — but the real Chicago starts when you walk away from the tourist crowd</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
                    <Beer className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Rooftop Views</h3>
                    <p>If you want a view, skip the long lines at Willis Tower. Go to a rooftop bar instead. You’ll still see the skyline, but with music, people, and a drink in your hand</p>
                  </div>
                </div>
              </div>
              <PhotoCard 
                src="https://picsum.photos/seed/chicago-lake/600/800" 
                caption="Serenity at Lake Michigan"
                className="h-[400px]"
              />
            </div>
          </Section>

          {/* Where Chicago feels real */}
          <Section title="Where Chicago feels real" icon={Heart}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <PhotoCard 
                src="https://picsum.photos/seed/chicago-neighborhood/600/800" 
                caption="Wicker Park Street Art"
                className="h-[400px] order-2 md:order-1"
              />
              <div className="space-y-6 order-1 md:order-2">
                <p>Walk around <strong>Lincoln Park</strong> or <strong>Wicker Park</strong>. That’s where people actually live. Small cafes, street art, bookstores — nothing fancy, but it feels real</p>
                <div className="bg-zinc-900 text-white p-6 rounded-2xl">
                  <div className="flex items-center gap-2 mb-3">
                    <Music className="w-5 h-5 text-chicago-red" />
                    <h3 className="font-bold uppercase tracking-wider">Nightlife</h3>
                  </div>
                  <p className="text-zinc-300 text-sm">At night, go to Cuba Street-style places — live music, small bars, no dress code, just атмосфера (vibe). Chicago isn’t about luxury, it’s about energy</p>
                </div>
              </div>
            </div>
          </Section>

          {/* Food */}
          <Section title="Food – what’s worth it" icon={Utensils}>
            <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100">
              <p className="mb-6">Yes, try deep-dish pizza once. Just once. It’s heavy, and honestly, locals don’t eat it every week. What people actually love is:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Italian beef sandwiches",
                  "Chicago-style hot dogs",
                  "Small local diners",
                  "Hidden neighborhood gems"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-chicago-red" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm italic text-zinc-500">"If a place looks simple but full of people — that’s where you go"</p>
            </div>
          </Section>

          {/* Things to skip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Section title="Things tourists do (but you can skip)" icon={Info}>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-chicago-red font-bold">1</span>
                    <span>Waiting hours for attractions like Skydeck</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-chicago-red font-bold">2</span>
                    <span>Eating only in downtown</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-chicago-red font-bold">3</span>
                    <span>Trying to see everything in one day</span>
                  </li>
                </ul>
                <p className="mt-4 font-medium text-zinc-900">Chicago isn’t a checklist city. It’s better when you slow down</p>
              </Section>
            </div>
            <PhotoCard 
              src="https://picsum.photos/seed/chicago-train/400/600" 
              caption="The iconic 'L' Train"
              className="h-full"
            />
          </div>

          {/* Tips */}
          <Section title="Tips from a local" icon={ShieldCheck}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white border border-zinc-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center mb-4">
                  <Train className="w-5 h-5 text-zinc-600" />
                </div>
                <h4 className="font-bold mb-2">Take the "L"</h4>
                <p className="text-sm text-zinc-600">It's more than just transport — it's part of the experience. Wear comfortable shoes, you'll walk a lot</p>
              </div>
              <div className="p-6 bg-white border border-zinc-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center mb-4">
                  <CloudRain className="w-5 h-5 text-zinc-600" />
                </div>
                <h4 className="font-bold mb-2">Weather & Safety</h4>
                <p className="text-sm text-zinc-600">Weather changes fast. Sunny morning can turn cold by evening. And yeah... be aware of your surroundings</p>
              </div>
            </div>
          </Section>

          {/* Final Thought */}
          <footer className="pt-16 border-t border-zinc-100 text-center">
            <h3 className="text-4xl font-display font-bold text-zinc-900 mb-6">Final thought</h3>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              "Chicago doesn’t try to impress you — and that’s why it does. Give it a little time, walk without a plan, and you’ll start to understand why people stay here"
            </p>
            <div className="mt-12 flex justify-center">
              <div className="relative">
                <Heart className="w-12 h-12 text-chicago-red fill-chicago-red animate-pulse" />
                <div className="absolute inset-0 bg-chicago-red/20 blur-xl rounded-full" />
              </div>
            </div>
          </footer>
        </div>
        
        {/* Footer Bar */}
        <div className="bg-zinc-900 py-4 px-8 flex justify-between items-center text-zinc-500 text-xs uppercase tracking-widest">
          <span>Chicago Tourist Booklet 2026</span>
          <span>Explore the Vibe</span>
        </div>
      </div>

      {/* Credit */}
      <div className="max-w-4xl mx-auto mt-12 text-center text-zinc-400 text-sm">
        <p>Created by student Romanyuk M. A. to teacher Nekrasov M.V. • 01-25.ИСИП.ОД.11</p>
      </div>
    </div>
  );
}
