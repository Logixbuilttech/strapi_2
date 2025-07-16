import Container from "@/components/comman/Container";
import Link from "next/link";
import TextInput from "../TextInput";
import Textarea from "../Textarea";
import Button from "../Button";

const ContactForm = () => {
  return (
    <section className="pb-[84px]">
      <Container>
        <div className="flex gap-3 flex-col-reverse lg:flex-row">
          <div className="w-full lg:w-[362px]">
            <ul className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1">
              <li className="group ">
                <div className="h-full lg:h-auto transition p-4 rounded-[16px] gap-[30px] lg:gap-[46px] bg-[#E9F5AC] lg:bg-[rgba(255,255,255,0.07)] flex flex-col justify-between text-center text-[#16363D] lg:text-[#E9F5AC] group-hover:bg-[#E9F5AC] group-hover:text-[#16363D]">
                  <label className="text-[14px] md:text-[16px] leading-[120%] -tracking-[.03em] font-semibold font-Archivo ">
                    Phone:
                  </label>
                  <div className="grid gap-3 justify-center">
                    <i className="mx-auto">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.7031 15.9979C19.2795 15.7295 18.7688 15.6346 18.277 15.733C17.7853 15.8313 17.3503 16.1153 17.0625 16.526C16.0875 17.7042 14.9094 19.6542 10.4812 15.226C6.05312 10.7979 7.9625 9.57917 9.14062 8.60417C9.55132 8.31637 9.83535 7.88141 9.9337 7.38966C10.032 6.8979 9.93716 6.38716 9.66875 5.96354L6.90625 1.73854C6.54062 1.21041 6.05312 0.35729 4.91562 0.51979C3.77813 0.68229 0.8125 2.34791 0.8125 6.00417C0.8125 9.66042 3.69687 14.1292 7.6375 18.0698C11.5781 22.0104 16.0469 24.8542 19.6625 24.8542C23.2781 24.8542 25.025 21.6042 25.1469 20.7917C25.2687 19.9792 24.4562 19.1667 23.9281 18.801L19.7031 15.9979Z"
                          fill="currentColor"
                        />
                      </svg>
                    </i>
                    <span className="font-Archivo font-medium text-[18px] lg:text-[22px] leading-[120%] -tracking-[.03em]  ">
                      767-265-9189
                    </span>
                  </div>
                </div>
              </li>
              <li className="group ">
                <div className="h-full lg:h-auto transition p-4 rounded-[16px] gap-[30px] lg:gap-[46px] bg-[#E9F5AC] lg:bg-[rgba(255,255,255,0.07)] flex flex-col justify-between text-center text-[#16363D] lg:text-[#E9F5AC] group-hover:bg-[#E9F5AC] group-hover:text-[#16363D]">
                  <label className="text-[14px] md:text-[16px] leading-[120%] -tracking-[.03em] font-semibold font-Archivo ">
                    WhatsApp:
                  </label>
                  <div className="grid gap-3 justify-center">
                    <i className="mx-auto">
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.498 0.0147705C13.3435 -0.0756412 15.1855 0.258037 16.8818 0.990356C18.5781 1.72271 20.0844 2.83432 21.2842 4.23938C22.4838 5.64442 23.3452 7.30586 23.8027 9.09583C24.2603 10.886 24.3023 12.7579 23.9238 14.5665C23.5454 16.375 22.757 18.0729 21.6201 19.5294C20.4832 20.9858 19.0277 22.1627 17.3652 22.9689C15.7027 23.7751 13.877 24.189 12.0293 24.1798C10.1816 24.1706 8.36051 23.738 6.70605 22.9152L0.600586 24.3615C0.52372 24.3795 0.4433 24.3786 0.367188 24.3575C0.291123 24.3365 0.221644 24.2963 0.165039 24.2413C0.108357 24.1862 0.0661829 24.1177 0.0429688 24.0421C0.0197758 23.9666 0.0162623 23.8861 0.0322266 23.8087L1.31543 17.5792C0.399928 15.7805 -0.0511014 13.7813 0.00390625 11.7638C0.0589234 9.7462 0.618624 7.77461 1.63086 6.02844C2.6431 4.28228 4.07633 2.81713 5.7998 1.76672C7.52323 0.716407 9.48223 0.114151 11.498 0.0147705ZM8.30566 6.2843C8.1733 6.25397 8.03525 6.25505 7.90332 6.28723C7.77154 6.31944 7.64932 6.38206 7.5459 6.46985C6.89225 7.02276 6.11671 7.86239 6.02246 8.79309C5.85645 10.4339 6.56042 12.5017 9.2207 14.9845C12.2942 17.8536 14.7557 18.2347 16.3584 17.8448C17.2675 17.6247 17.9939 16.7423 18.4521 16.0197C18.5251 15.9051 18.571 15.7749 18.585 15.6398C18.5989 15.5048 18.5812 15.3683 18.5332 15.2413C18.4852 15.1143 18.4075 15.0004 18.3076 14.9083C18.2079 14.8164 18.0883 14.7487 17.958 14.7111L15.6162 14.0382C15.4651 13.9949 15.3044 13.9932 15.1523 14.0333C15.0004 14.0734 14.862 14.1545 14.752 14.2667L14.1797 14.8497C14.0618 14.9704 13.9102 15.0532 13.7451 15.088C13.5801 15.1228 13.4085 15.1087 13.252 15.046C12.1441 14.5991 9.8135 12.5269 9.21875 11.4894C9.13522 11.3428 9.09737 11.1743 9.10938 11.006C9.12143 10.8379 9.18284 10.6772 9.28613 10.5441L9.78613 9.89661C9.88221 9.77225 9.94298 9.6239 9.96191 9.4679C9.98077 9.31192 9.95713 9.15357 9.89355 9.00989L8.90918 6.78137C8.85424 6.6573 8.77069 6.54741 8.66602 6.46106C8.56138 6.37481 8.43784 6.31462 8.30566 6.2843Z"
                          fill="currentColor"
                        />
                      </svg>
                    </i>
                    <span className="font-Archivo font-medium text-[18px] lg:text-[22px] leading-[120%] -tracking-[.03em] ">
                      767-265-9189
                    </span>
                  </div>
                </div>
              </li>
              <li className="group">
                <div className="h-full lg:h-auto transition p-4 rounded-[16px] gap-[30px] lg:gap-[46px] bg-[#E9F5AC] lg:bg-[rgba(255,255,255,0.07)] flex flex-col justify-between text-center text-[#16363D] lg:text-[#E9F5AC] group-hover:bg-[#E9F5AC] group-hover:text-[#16363D]">
                  <label className="text-[14px] md:text-[16px] leading-[120%] -tracking-[.03em] font-semibold font-Archivo ">
                    Email:
                  </label>
                  <div className="grid gap-3 justify-center">
                    <i className="mx-auto">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.3625 17.1438L25.1875 24.0094V12.4313L18.3625 17.1438ZM0.8125 12.2688V24.0094L7.6375 17.1438L0.8125 12.2688ZM9.87187 17.1844L1.95 25.1875H24.05L16.1281 17.1844C14.8281 15.925 11.1719 15.925 9.87187 17.1844ZM23.5625 9.99377V11.5781L24.5781 10.8469L23.5625 9.99377ZM2.4375 9.99377L1.50313 10.7656L2.4375 11.4156V9.99377Z"
                          fill="currentColor"
                        />
                        <path
                          d="M17.1438 15.9656L21.9375 12.675V0.8125H4.0625V12.675L8.775 15.9656C10.725 14.1781 15.2344 14.1781 17.1438 15.9656ZM18.6875 8.9375H9.75V7.3125H18.6875V8.9375ZM7.3125 4.0625H11.375V5.6875H7.3125V4.0625ZM7.3125 10.5625H18.6875V12.1875H7.3125V10.5625Z"
                          fill="currentColor"
                        />
                      </svg>
                    </i>
                    <Link
                      href="mailto:info@renewedge-solutions.com"
                      className="font-Archivo font-medium text-[18px] lg:text-[22px] leading-[120%] -tracking-[.03em] "
                    >
                      info@renewedge-solutions.com
                    </Link>
                  </div>
                </div>
              </li>
              <li className="group">
                <div className="h-full lg:h-auto transition p-4 rounded-[16px] gap-[30px] lg:gap-[46px] bg-[#E9F5AC] lg:bg-[rgba(255,255,255,0.07)] flex flex-col justify-between text-center text-[#16363D] lg:text-[#E9F5AC] group-hover:bg-[#E9F5AC] group-hover:text-[#16363D]">
                  <label className="text-[14px] md:text-[16px] leading-[120%] -tracking-[.03em] font-semibold font-Archivo ">
                    Facebook
                  </label>
                  <div className="grid gap-3 justify-center">
                    <i className="mx-auto">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M26 13.0794C26 5.85586 20.1797 0 13 0C5.82029 0 0 5.85586 0 13.0794C0 19.6078 4.75391 25.0188 10.9688 26V16.8602H7.66797V13.0794H10.9688V10.1979C10.9688 6.91984 12.9096 5.10916 15.879 5.10916C17.3013 5.10916 18.7891 5.36462 18.7891 5.36462V8.58339H17.1498C15.5349 8.58339 15.0312 9.5916 15.0312 10.626V13.0794H18.6367L18.0604 16.8602H15.0312V26C21.2461 25.0188 26 19.6078 26 13.0794Z"
                          fill="currentColor"
                        />
                      </svg>
                    </i>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-[calc(100%-374px)] p-6 lg:p-10 rounded-[16px] bg-[rgba(255,255,255,0.07)]">
            <h2 className="text-[#EEECDE] text-[28px] lg:text-[48px] leading-[112%] uppercase mb-[30px] block text-center">
              Fill the form
            </h2>
            <form>
              <div className="grid gap-3 contactForm">
                <TextInput placeholder="Your name" />
                <TextInput placeholder="Your email address" />
                <TextInput placeholder="xxx xx xx" />
                <Textarea placeholder="How can we help?" />
                <button
                  className="bg-[#E9F5AC] border-1 border-[#E9F5AC] text-[14px] lg:text-[18px] text-[#16363D] font-semibold tracking-[.02em] 
                  uppercase leading-[100%] block rounded-full w-full p-[15px] lg:p-5 mt-[18px] font-Archivo h-[44px] lg:h-[60px]"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;
