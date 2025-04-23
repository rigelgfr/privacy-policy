// src/App.tsx
import { useState } from 'react';

const App = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    'collection': false,
    'usage': false,
    'sharing': false,
    'security': false,
    'cookies': false,
    'changes': false,
    'contact': false
  });

  const toggleSection = (section: string) => {
    setExpanded(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const appName = "rigelgfr's Privacy Policy";
  const companyName = "rigelgfr";
  const email = "rigelrahateen@gmail.com";
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6 flex flex-col items-center w-screen">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="opacity-90">Last Updated: {lastUpdated}</p>
        </div>
        
        <div className="p-6 md:p-8">
          <p className="text-gray-700 mb-6">
            Welcome to {appName}. We respect your privacy and are committed to protecting your personal data.
            This Privacy Policy explains how we collect, use, and safeguard your information when you use our application.
          </p>
          
          <div className="space-y-4">
            {/* Information Collection Section */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button 
                className="w-full text-left p-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => toggleSection('collection')}
              >
                <h2 className="text-lg font-medium text-gray-800">Information We Collect</h2>
                <span className="text-blue-600">{expanded.collection ? '−' : '+'}</span>
              </button>
              
              {expanded.collection && (
                <div className="p-4 bg-white text-gray-600">
                  <p className="mb-3">We may collect the following types of information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Personal information such as name, email address, and profile data when you register or authenticate with our service</li>
                    <li>Usage data including how you interact with our application</li>
                    <li>Device information such as IP address, browser type, and operating system</li>
                    <li>Authentication data when you connect using third-party services like Facebook OAuth</li>
                  </ul>
                </div>
              )}
            </div>
            
            {/* Information Usage Section */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button 
                className="w-full text-left p-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => toggleSection('usage')}
              >
                <h2 className="text-lg font-medium text-gray-800">How We Use Your Information</h2>
                <span className="text-blue-600">{expanded.usage ? '−' : '+'}</span>
              </button>
              
              {expanded.usage && (
                <div className="p-4 bg-white text-gray-600">
                  <p className="mb-3">We use the collected information for various purposes, including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Providing and maintaining our service</li>
                    <li>Authenticating your identity and managing your account</li>
                    <li>Personalizing your experience</li>
                    <li>Analyzing usage patterns to improve our service</li>
                    <li>Communicating with you about updates or changes</li>
                    <li>Ensuring the security of our application</li>
                  </ul>
                </div>
              )}
            </div>
            
            {/* Information Sharing Section */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button 
                className="w-full text-left p-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => toggleSection('sharing')}
              >
                <h2 className="text-lg font-medium text-gray-800">Information Sharing</h2>
                <span className="text-blue-600">{expanded.sharing ? '−' : '+'}</span>
              </button>
              
              {expanded.sharing && (
                <div className="p-4 bg-white text-gray-600">
                  <p className="mb-3">We may share your personal information with:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Service providers who perform services on our behalf</li>
                    <li>Third-party authentication providers (like Facebook) when you choose to connect through them</li>
                    <li>Legal authorities when required by law</li>
                    <li>Business partners with your consent</li>
                  </ul>
                  <p className="mt-3">We do not sell your personal information to third parties.</p>
                </div>
              )}
            </div>
            
            {/* Data Security Section */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button 
                className="w-full text-left p-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => toggleSection('security')}
              >
                <h2 className="text-lg font-medium text-gray-800">Data Security</h2>
                <span className="text-blue-600">{expanded.security ? '−' : '+'}</span>
              </button>
              
              {expanded.security && (
                <div className="p-4 bg-white text-gray-600">
                  <p>
                    We implement appropriate security measures to protect your personal information from unauthorized access, 
                    alteration, disclosure, or destruction. However, no electronic transmission or storage method is 100% secure, 
                    and we cannot guarantee absolute security.
                  </p>
                </div>
              )}
            </div>
            
            {/* Cookies Section */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button 
                className="w-full text-left p-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => toggleSection('cookies')}
              >
                <h2 className="text-lg font-medium text-gray-800">Cookies and Tracking</h2>
                <span className="text-blue-600">{expanded.cookies ? '−' : '+'}</span>
              </button>
              
              {expanded.cookies && (
                <div className="p-4 bg-white text-gray-600">
                  <p className="mb-3">
                    We may use cookies, web beacons, and similar technologies to enhance your experience, 
                    collect usage information, and improve our service. You can control cookie settings through your browser preferences.
                  </p>
                  <p>
                    When using third-party authentication like Facebook OAuth, their cookies and privacy policies will also apply.
                  </p>
                </div>
              )}
            </div>
            
            {/* Policy Changes Section */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button 
                className="w-full text-left p-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => toggleSection('changes')}
              >
                <h2 className="text-lg font-medium text-gray-800">Changes to This Policy</h2>
                <span className="text-blue-600">{expanded.changes ? '−' : '+'}</span>
              </button>
              
              {expanded.changes && (
                <div className="p-4 bg-white text-gray-600">
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
                    policy on this page and updating the "Last Updated" date. We recommend reviewing this policy periodically.
                  </p>
                </div>
              )}
            </div>
            
            {/* Contact Section */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button 
                className="w-full text-left p-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => toggleSection('contact')}
              >
                <h2 className="text-lg font-medium text-gray-800">Contact Us</h2>
                <span className="text-blue-600">{expanded.contact ? '−' : '+'}</span>
              </button>
              
              {expanded.contact && (
                <div className="p-4 bg-white text-gray-600">
                  <p>
                    If you have any questions about this Privacy Policy, please contact us at:{' '}
                    <a href={`mailto:${email}`} className="text-blue-600 hover:underline">{email}</a>
                  </p>
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;