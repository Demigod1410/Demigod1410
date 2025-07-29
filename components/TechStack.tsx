import React from 'react';
import TranslucentTab from './ui/translucentTabs';

// Using local SVG files from the public directory
const htmlIcon = '/HTML5.svg';
const jsIcon = '/JavaScript.svg';
const cssIcon = '/CSS3.svg';
const reactIcon = '/React.svg';
const nodeIcon = '/Node.js.svg';
const twIcon = '/Tailwind CSS.svg';
const gitIcon = '/Git.svg';
const tsIcon = '/TypeScript.svg';
const nextIcon = '/Next.js.svg';
const figmaIcon = '/Figma.svg';
const ghIcon = '/GitHub.svg';
const shadcnIcon = '/shadcn-ui.png';


const TechStack = () => {

    return (
        <div className="relative h-screen flex justify-center items-center overflow-hidden bg-slate-900/60">
            {/* Background grid and mask */}
            <div className="absolute inset-0 w-full h-full bg-grid-white/[0.02] bg-grid-8" />
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-slate-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            <div className="absolute w-full h-full bg-slate-900 [mask-image:radial-gradient(transparent,white)] pointer-events-none opacity-50" />
            <div className='relative z-10 text-center'>
                <h1 className='text-white text-3xl sm:text-5xl font-bold mb-12 mt-0 sm:mt-0'>👨‍💻 Tech Stack</h1>
                <div className='grid grid-cols-2 sm:grid-cols-4 gap-x-5 gap-y-2'>
                    <TranslucentTab content="HTML" icon={htmlIcon} link="https://developer.mozilla.org/en-US/docs/Web/HTML" size="px-10 py-5 border col-span-1" />
                    <TranslucentTab content="CSS" icon={cssIcon} link="https://developer.mozilla.org/en-US/docs/Web/CSS" size="px-10 py-5 border col-span-1" />
                    <TranslucentTab content="JavaScript" icon={jsIcon} link="https://developer.mozilla.org/en-US/docs/Web/JavaScript" size="px-10 py-5 border col-span-1" />
                    <TranslucentTab content="Next.js" icon={nextIcon} link="https://nextjs.org/" size="px-10 py-5 border col-span-1" />
                    <TranslucentTab content="React" icon={reactIcon} link="https://reactjs.org/" size="px-10 py-5 border col-span-1" />
                    <TranslucentTab content="Tailwind CSS" icon={twIcon} link="https://tailwindcss.com/" size="px-10 py-5 border col-span-1" />
                    <TranslucentTab content="TypeScript" icon={tsIcon} link="https://www.typescriptlang.org/" size="px-10 py-5 border col-span-1" />
                    <TranslucentTab content="Shadcn" icon={shadcnIcon} link="https://ui.shadcn.com/" size="px-10 py-5 border col-span-1" />
                    <TranslucentTab content="Git" icon={gitIcon} link="https://git-scm.com/" size="px-10 py-5 border col-span-1" />
                    <TranslucentTab content="GitHub" icon={ghIcon} link="https://www.github.com/" size="px-10 py-5 border col-span-1" />
                    <TranslucentTab content="Node.js" icon={nodeIcon} link="https://nodejs.org/" size="px-10 py-5 border col-span-1" />
                    <TranslucentTab content="Figma" icon={figmaIcon} link="https://www.figma.com/" size="px-10 py-5 border col-span-1" />
                </div>

            </div>
        </div>
    );
};

export default TechStack;