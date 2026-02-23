import { PropsWithChildren } from 'react';

interface PhoneFrameProps {
  title: string;
}

export const PhoneFrame = ({ title, children }: PropsWithChildren<PhoneFrameProps>) => (
  <div className="rounded-[2.2rem] border border-white/60 bg-[#f8f4ff]/80 p-2 shadow-soft">
    <div className="rounded-[1.8rem] bg-white p-4">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-violet-600">{title}</p>
      {children}
    </div>
  </div>
);
