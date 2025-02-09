import React from 'react';
import TranslucentTab from './ui/translucentTabs';
const htmlIcon = 'https://raw.githubusercontent.com/shubhojit-mitra-dev/shubhojit-mitra-dev/a5a6b834138df6378d5d24003327a85304e6d268/src/assets/html.svg';
const jsIcon = 'https://raw.githubusercontent.com/shubhojit-mitra-dev/shubhojit-mitra-dev/a5a6b834138df6378d5d24003327a85304e6d268/src/assets/javascript.svg';
const cssIcon = 'https://raw.githubusercontent.com/shubhojit-mitra-dev/shubhojit-mitra-dev/a5a6b834138df6378d5d24003327a85304e6d268/src/assets/css.svg';
const reactIcon = 'https://raw.githubusercontent.com/shubhojit-mitra-dev/shubhojit-mitra-dev/a5a6b834138df6378d5d24003327a85304e6d268/src/assets/react.svg';
const nodeIcon = 'https://raw.githubusercontent.com/shubhojit-mitra-dev/shubhojit-mitra-dev/a5a6b834138df6378d5d24003327a85304e6d268/src/assets/node.svg';
const twIcon = 'https://raw.githubusercontent.com/shubhojit-mitra-dev/shubhojit-mitra-dev/a5a6b834138df6378d5d24003327a85304e6d268/src/assets/tailwind.svg';
const gitIcon = 'https://raw.githubusercontent.com/shubhojit-mitra-dev/shubhojit-mitra-dev/a5a6b834138df6378d5d24003327a85304e6d268/src/assets/git.svg';
const tsIcon = 'https://raw.githubusercontent.com/shubhojit-mitra-dev/shubhojit-mitra-dev/a5a6b834138df6378d5d24003327a85304e6d268/src/assets/typescript.svg';
const nextIcon = 'https://raw.githubusercontent.com/shubhojit-mitra-dev/shubhojit-mitra-dev/a5a6b834138df6378d5d24003327a85304e6d268/src/assets/nextjs.svg';
const figmaIcon = 'https://raw.githubusercontent.com/shubhojit-mitra-dev/shubhojit-mitra-dev/a5a6b834138df6378d5d24003327a85304e6d268/src/assets/figma.svg';
const ghIcon = 'https://raw.githubusercontent.com/shubhojit-mitra-dev/shubhojit-mitra-dev/a5a6b834138df6378d5d24003327a85304e6d268/src/assets/github.svg';
const shadcnIcon = 'https://raw.githubusercontent.com/shubhojit-mitra-dev/shubhojit-mitra-dev/a5a6b834138df6378d5d24003327a85304e6d268/src/assets/shadcn.svg';


const TechStack = () => {



    return (
        <div className='flex justify-center items-center p-4 sm:mb-0' style={{ height: 'calc(100vh + 4rem)', backgroundImage: 'url(/bg2.png)', backgroundSize: 'cover', backgroundPosition: 'center',}}>
            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            <div className='relative text-center'>
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