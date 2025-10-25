import Image from 'next/image';

export default function HeroVisual() {
  return (
    <div className="flex items-center justify-center py-16 bg-gray-100">
      <Image
        src="/nextpeek.svg"
        alt="NextPeek Application"
        width={800}
        height={600}
        className="rounded-lg shadow-xl"
      />
    </div>
  );
}