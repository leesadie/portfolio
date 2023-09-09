'use client';

import Container from "../Container";
import Button from "./Button";
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router = useRouter();

    return (
        <div className="w-full z-10">
            <div className="pb-10 pt-5 border-b-[1px] border-amber-50">
                <Container>
                    <div
                        className="
                            flex
                            flex-row
                            items-center
                            justify-center
                            gap-16
                            font-normal
                            lg:text-lg
                            text-sm
                            pt-5
                            text-amber-50
                            px-5
                            lg:px-0
                        "
                    >
                        <Button 
                            label="S — L"
                            onClick={() => router.push('/')}
                        />
                        <Button 
                            label="About"
                            onClick={() => router.push('/about')}
                        />
                        <Button 
                            label="( Lab )"
                            onClick={() => router.push('lab')}
                        />
                        <a
                            target='_blank' 
                            rel='noopener noreferrer' 
                            href='files/Sadie Lee Resume.pdf'
                        >
                            <Button 
                                label="CV"
                                onClick={() => {}}
                            />
                        </a>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Navbar;