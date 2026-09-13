import React from 'react';
import { HelpCircle, CheckCircle, AlertTriangle, ShieldCheck, Download, Cpu, HardDrive } from 'lucide-react';

export const SeoContentSection: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            Buyer Education & Technical Guidance
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Understanding Digital Software Licenses & Product Keys
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            A comprehensive, transparent technical guide to help you make informed purchasing decisions for Windows, Office, and digital software suites.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Column 1 */}
          <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-blue-600" />
                What is a Digital Software License?
              </h3>
              <p className="mt-2">
                A digital software license is an electronic authorization code—typically consisting of 25 alphanumeric characters (e.g., <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800 text-xs font-mono">XXXXX-XXXXX-XXXXX-XXXXX-XXXXX</code> for Microsoft products)—that certifies your legal right to install and run a proprietary software program. Rather than paying extra for physical optical discs, paper packaging, and shipping freight, digital licensing fulfills the authorization instantly over the internet.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Download className="h-4 w-4 text-blue-600" />
                How Does Digital Software Delivery Work?
              </h3>
              <p className="mt-2">
                Modern software publishers maintain public Content Delivery Networks (CDNs) where anyone can download official, unmodified installer ISOs (such as the official Microsoft Windows Media Creation Tool or Office CDN). When you purchase a digital key from CoreLicense, you receive the cryptographic key along with direct URLs to these official vendor servers. You install the clean software and enter your key to unlock full features permanently.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-blue-600" />
                Retail vs. OEM: Understanding Key Classifications
              </h3>
              <p className="mt-2">
                Before purchasing, it is critical to know the difference between license tiers:
              </p>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-xs text-slate-600">
                <li>
                  <strong className="text-slate-900">Retail Licenses:</strong> Can be transferred to another computer in the future if you replace or upgrade your machine, provided it is removed from the old system.
                </li>
                <li>
                  <strong className="text-slate-900">OEM (Original Equipment Manufacturer) Licenses:</strong> Locked to the unique hardware ID of the initial motherboard. They are cost-effective for single permanent PC builds but cannot be moved to a different motherboard.
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                Pre-Purchase Technical Checklist: What to Verify First
              </h3>
              <p className="mt-2">
                To guarantee effortless activation, we advise all customers to verify these 4 technical factors prior to placing an order:
              </p>
              <div className="mt-3 space-y-3">
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-900">
                    <Cpu className="h-3.5 w-3.5 text-blue-600" /> 1. Operating System & TPM 2.0 Compatibility
                  </div>
                  <p className="mt-1 text-xs text-slate-600">
                    Windows 11 strictly requires a 64-bit compatible CPU, UEFI Secure Boot, and TPM 2.0. If your hardware lacks TPM 2.0, consider Windows 10 Professional.
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-900">
                    <HardDrive className="h-3.5 w-3.5 text-blue-600" /> 2. Edition Matching (Home vs. Pro)
                  </div>
                  <p className="mt-1 text-xs text-slate-600">
                    You cannot activate a pre-installed Windows 11 Home edition with a Windows 10 Home key, but you can directly upgrade Windows 11 Home to Windows 11 Pro using a valid Pro key without formatting your drive.
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-900">
                    <HelpCircle className="h-3.5 w-3.5 text-blue-600" /> 3. Regional Restrictions & Microsoft Accounts
                  </div>
                  <p className="mt-1 text-xs text-slate-600">
                    All keys on CoreLicense are marked with explicit regional validity (e.g. Global/Worldwide). Office 2024 requires a free personal or business Microsoft Account for redemption.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                How Software Activation Servers Verify Your Key
              </h3>
              <p className="mt-2 text-xs">
                When you click "Activate" in Windows or sign into setup.office.com, your computer sends an encrypted handshake containing your product key and installation ID directly to Microsoft’s Activation Clearinghouse. Once verified, an authentic digital license token is cryptographically bound to your machine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
