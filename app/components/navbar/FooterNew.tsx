'use client';

import Container from "../Container";
import Button from "./Button";

const FooterNew = () => {
    return (
        <div className="w-full z-10 mt-20">
            <div className="pb-10 pt-5 border-t-[1px] border-amber-50">
                <Container>
                    <div className="
                        flex
                        flex-row
                        items-center
                        justify-center
                        gap-20
                        lg:text-lg
                        text-sm
                        pt-5
                        text-amber-50
                    ">
                        <a target='_blank' rel='noopener noreferrer' href='mailto:slee103@student.ubc.ca'>
                            <Button 
                                label="Email"
                                onClick={() => {}}
                            />
                        </a>
                        <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/leesadie/'>
                            <Button 
                                label="LinkedIn"
                                onClick={() => {}}
                            />
                        </a>
                        <a target='_blank' rel='noopener noreferrer' href='https://github.com/leesadie'>
                            <Button 
                                label="GitHub"
                                onClick={() => {}}
                            />
                        </a>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default FooterNew;