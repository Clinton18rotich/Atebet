import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

/**
 * Atebet — The Behaviour of the People of the Mouth
 * 
 * Main application entry point.
 * 
 * Navigation structure mirrors the Kipsigis house:
 * - Mabwaita (Altar) — East-facing daily opening
 * - Kot (House) — Core learning
 * - Tuga (Cattle) — Dictionary & vocabulary
 * - Chepalungu (Music) — Musical heritage
 * - Kokwet (Community) — Social & profiles
 * - Oret (Clans) — Lore codex
 * 
 * For now, a placeholder that demonstrates the app shell is operational.
 * Full navigation and screens will be built out incrementally.
 */

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading cultural data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    // Mabwaita loading screen — facing East
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#FFF8F0',
        fontFamily: 'system-ui, sans-serif',
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          backgroundColor: '#FF6B35',
          marginBottom: '24px',
          animation: 'pulse 2s infinite',
        }} />
        <h1 style={{
          fontSize: '32px',
          fontWeight: 600,
          color: '#1A1A1A',
          marginBottom: '8px',
        }}>
          Atebet
        </h1>
        <p style={{
          fontSize: '16px',
          color: '#5C5C5C',
          fontStyle: 'italic',
        }}>
          Atebetab Piikab Kutit
        </p>
        <p style={{
          fontSize: '14px',
          color: '#8B8682',
          marginTop: '16px',
        }}>
          The Behaviour of the People of the Mouth
        </p>
      </div>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* Placeholder — will be replaced with full tab navigation */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          backgroundColor: '#FFF8F0',
          fontFamily: 'system-ui, sans-serif',
          padding: '24px',
        }}>
          <h1 style={{ fontSize: '28px', color: '#1A1A1A', marginBottom: '16px' }}>
            🌍 Atebet is Live
          </h1>
          <p style={{ fontSize: '16px', color: '#5C5C5C', textAlign: 'center', marginBottom: '32px' }}>
            The Kipsigis Language & Culture Preservation App
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '12px',
            maxWidth: '400px',
            width: '100%',
          }}>
            {[
              { name: 'Mabwaita', emoji: '🌅', desc: 'Daily Blessing' },
              { name: 'Kot', emoji: '🏠', desc: 'Learn' },
              { name: 'Tuga', emoji: '🐄', desc: 'Dictionary' },
              { name: 'Chepalungu', emoji: '🎵', desc: 'Music' },
              { name: 'Kokwet', emoji: '👥', desc: 'Community' },
              { name: 'Oret', emoji: '📜', desc: 'Lore' },
            ].map((tab) => (
              <div key={tab.name} style={{
                backgroundColor: '#FFFFFF',
                padding: '16px',
                borderRadius: '12px',
                border: '1px solid #E0D5C7',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>{tab.emoji}</div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#1A1A1A' }}>{tab.name}</div>
                <div style={{ fontSize: '12px', color: '#8B8682' }}>{tab.desc}</div>
              </div>
            ))}
          </div>
          <p style={{
            fontSize: '12px',
            color: '#8B8682',
            marginTop: '32px',
            fontStyle: 'italic',
            textAlign: 'center',
          }}>
            "Emoni! Paybay, ole paybay!"
          </p>
        </div>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
