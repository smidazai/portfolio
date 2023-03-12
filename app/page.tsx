
import Link from 'next/link';
import Image from 'next/image';
import {
  EmailIcon,
  ResearchGateIcon,
  OrcidIcon,
  MapIcon,
} from '../components/icons';
import { name, about, bio, avatar } from '../lib/info';

export const revalidate = 60;

export default async function HomePage() {

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">{name}</h1>
      <div className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </div>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={name}
          className="rounded-full"
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">

        <a
            target="_blank"
            href="https://www.researchgate.net/profile/Zaineb-Smida"
            className="flex items-center gap-2"
          >
            <ResearchGateIcon />
            ResearchGate
          </a>
        <a
            target="_blank"
            href="https://orcid.org/0000-0002-9974-299X"
            className="flex items-center gap-2"
          >
            <OrcidIcon />
            Orcid
          </a>
          <a
            target="_blank"
            href="mailto:zaineb.smida@ut-capitole.fr"
            className="flex items-center gap-2"
          >
            <EmailIcon />
            zaineb.smida@ut-capitole.fr
          </a>
          <div
            className="flex items-center gap-2"
          >
            <MapIcon />
            TSE, 1 Esp. de l'Université, 31000 Toulouse.
          </div>

          
        </div>
      </div>
      <div className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </div>
    </section>
  );
}
