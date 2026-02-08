import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-background-light pt-16 pb-8 dark:bg-background-dark border-t border-gray-100 dark:border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-xl">dentistry</span>
              </div>
              <h3 className="text-lg font-bold text-text-main dark:text-white">Skyline Dental</h3>
            </div>
            <p className="text-sm text-text-muted dark:text-gray-400">Making the world smile, one patient at a time. Modern care in a comfortable setting.</p>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-text-main dark:text-white">Company</h4>
            <ul className="space-y-3 text-sm text-text-muted dark:text-gray-400">
              <li><a className="hover:text-primary transition-colors" href="#">About Us</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Our Team</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-text-main dark:text-white">Services</h4>
            <ul className="space-y-3 text-sm text-text-muted dark:text-gray-400">
              <li><a className="hover:text-primary transition-colors" href="#">General Dentistry</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Cosmetic Solutions</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Surgical Procedures</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Emergency Care</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-text-main dark:text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-text-muted dark:text-gray-400">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-lg">location_on</span>
                123 Dental Ave, Suite 400
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-lg">call</span>
                (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-lg">mail</span>
                hello@skylinedental.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-200 py-6 dark:border-white/10 md:flex-row">
          <p className="text-xs text-text-muted dark:text-gray-500">
            &copy; {new Date().getFullYear()} Skyline Dental. All rights reserved.
          </p>
          <p className="text-xs text-text-muted dark:text-gray-500">
            Designed by <span className="font-semibold text-primary hover:text-primary-dark transition-colors cursor-pointer">Skyrn Studio</span>
          </p>
          <div className="flex gap-4">
            <a className="text-gray-400 hover:text-primary transition-colors" href="#"><span className="sr-only">Facebook</span><svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path></svg></a>
            <a className="text-gray-400 hover:text-primary transition-colors" href="#"><span className="sr-only">Twitter</span><svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
