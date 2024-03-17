
import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

function FooterComponent() {
  return (
    <footer className="bg-blue-600 p-4 mt-9">
            <Footer className="container mx-auto bg-blue-600 border-0">
                <div className="w-full">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div>
                            <FooterBrand
                                src="https://istad.co/resources/img/logo_md.png" className="mr-3 h-20 pl-10 "
                                alt="Flowbite React Logo"/>
                           <span
                               className="self-center whitespace-nowrap text-white tracking-[.25em]">Start your IT career with CSTAD</span>
                        </div>

                        <div>
                            <FooterTitle className="text-white text-lg " title="LEARN MORE"/>
                            <FooterLinkGroup col>
                                <FooterLink className=' text-white ' href="#">Course</FooterLink>
                                <FooterLink className=' text-white ' href="#">IT News</FooterLink>
                                <FooterLink className=' text-white ' href="#">Job Opportunity</FooterLink>
                                <FooterLink className=' text-white ' href="#">Privacy Policy</FooterLink>
                                <FooterLink className=' text-white ' href="#">FAQ</FooterLink>
                            </FooterLinkGroup>
                        </div>
                        <div>
                            <FooterTitle className="text-white text-lg " title="CONTACT US"/>
                            <FooterLinkGroup col> 
                                <FooterLink className=' text-white ' href="#">(+855) 95-990-910</FooterLink>
                                <FooterLink className=' text-white ' href="#">(+855) 93-990-910</FooterLink>
                                <FooterLink className=' text-white ' href="#"> </FooterLink>
                                <FooterLink className=' text-white ' href="#">Telegram</FooterLink>
                                <FooterLink className=' text-white ' href="#">Youtube</FooterLink>
                            </FooterLinkGroup>
                        </div>
                        <div>
                            <FooterTitle className="text-white text-lg " title="FOLLOW US"/>
                            <FooterLinkGroup col>
                                <FooterLink href="#">Privacy Policy</FooterLink>
                                <FooterLink href="#">Terms &amp; Conditions</FooterLink>
                            </FooterLinkGroup>
                        </div>

                    </div>
                    <FooterDivider/>
                    <div className="w-full grid place-content-center sm:items-center">

                        <FooterCopyright className="text-white"
                                         by="Center of Science and Technology Advanced Development | All Rights Reserved™"
                                         year={2022}/>

                      
                    </div>
                </div>
            </Footer>
        </footer>
  );
}



export default FooterComponent;