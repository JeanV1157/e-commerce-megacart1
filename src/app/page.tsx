import Menu from "../app/assets/svg/menu.svg";
import CarouselProducts from "../custom-components/carousel/Carousel-productos";
import CarouselOffers from "@/custom-components/carousel/Carousel-oferta";
import MagnificantGlasses from "../app/assets/svg/magnificant-glasses.svg";
import { PiHeartBold } from "react-icons/pi";
import { BsCart4 } from "react-icons/bs";
import HelloLogo from "./assets/svg/helloLogo.svg";
import { IoBagHandleSharp } from "react-icons/io5";
import Kitchen from "./assets/svg/kitchen.svg";
import Accessories from "./assets/svg/accessories.svg";
import { TbHanger } from "react-icons/tb";
import { PiHighHeel } from "react-icons/pi";
import Image from "next/image";
import Logo from "../app/assets/images/logo.png";
import SpecialSale from "../app/assets/images/specialSale.jpg";
import WeeklyOffers from "./assets/images/weeklyOffers.jpg";
import Covered from "./assets/images/covered.png";
import FryingPan from "./assets/images/fryingPan.png";
import Glasses from "./assets/images/glasses.jpg";
import Wallets from "./assets/images/wallets.png";
import Sunglasses from "./assets/images/sunglasses.png";
import HandWatch from "./assets/images/handWatch.png";
import Jeans from "./assets/images/jeans.png";
import Blouse from "./assets/images/blouse.png";
import OnePiece from "./assets/images/onePiece.png";
import BootsBrown from "./assets/images/bootsBrown.png";
import ShoesBlack from "./assets/images/shoesBlack.png";
import ShoesBlack2 from "./assets/images/shoesBlack2.png";
import GoodWeek from "./assets/images/goodWeek.jpg";
import { Button } from "@/components/ui/button";

export default function Home() {
  const mainBanner = [
    { src: SpecialSale, alt: "Baner Principal" },
    { src: GoodWeek, alt: "Buen fin de semana" },
  ];

  const kitchen = [
    { src: Covered, alt: "Cubiertos" },
    { src: Covered, alt: "Cubiertos" },
    { src: Covered, alt: "Cubiertos" },
    { src: Covered, alt: "Cubiertos" },
    { src: FryingPan, alt: "Sarten" },
    { src: Glasses, alt: "Vasos" },
  ];

  const accesories = [
    { src: Wallets, alt: "Carteras" },
    { src: Sunglasses, alt: "Lentes de sol" },
    { src: HandWatch, alt: "Reloj de mano" },
    { src: Wallets, alt: "Carteras" },
    { src: Sunglasses, alt: "Lentes de sol" },
    { src: HandWatch, alt: "Reloj de mano" },
  ];

  const clothes = [
    { src: Jeans, alt: "Jeans" },
    { src: OnePiece, alt: "Enterizo" },
    { src: Blouse, alt: "Blusa" },
    { src: Jeans, alt: "Jeans" },
    { src: OnePiece, alt: "Enterizo" },
    { src: Blouse, alt: "Blusa" },
  ];

  const footwear = [
    { src: ShoesBlack, alt: "Zapato Negro" },
    { src: ShoesBlack2, alt: "Zapato negro 2" },
    { src: BootsBrown, alt: "Botas marrones" },
    { src: ShoesBlack, alt: "Zapato Negro" },
    { src: ShoesBlack2, alt: "Zapato negro 2" },
    { src: BootsBrown, alt: "Botas marrones" },
  ];

  return (
    <div className=" bg-white items-center">
      <div className="flex items-center justify-center py-[3px]">
        <span className="font-actor text-[14px] font-bold text-[#003C60]">
          Hasta el 50% de descuento, en miles de productos
        </span>
      </div>
      <div className="flex justify-between h-[66px] bg-[#F8F9FAFF] border-b-[1px] border-[#b3b5ba] px-[30px] hover:border-b-[#0f3684]">
        <div className="flex items-center">
          <Image src={Logo} alt="MegaCart Logo" height={48} />
        </div>
        <div className="flex items-center justify-between ">
          <Button className="flex text-[#003C60] hover:bg-transparent text-[14px] font-bold">
            <Menu />
            <span className="font-actor">Menú</span>
          </Button>
        </div>
        <div className="flex items-center justify-between space-x-[35px]">
          <div className="flex items-center justify-center">
            <div className="relative flex items-center">
              <input
                placeholder="Buscar en MegaCart"
                className="pl-4 py-[4px] w-[435px] h-[40px] border-[1px] rounded-l-[10px] rounded-r-[20px] border-[#1D2128FF] outline-none text-black placeholder:font-actor text-[16px]"
              />
              <div className="flex justify-center absolute items-center right-[0px] h-[41px] w-[41px] border-[#1a4e6d] rounded-[20px] bg-[#003C60]">
                <Button>
                  <MagnificantGlasses className=" fill-white w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-around">
            <Button className="flex space-x-2">
              <HelloLogo />
              <span className="font-actor text-[#003C60] text-[14px] font-bold">
                Hola, Inicia sesion
              </span>
            </Button>
          </div>
          <div className="flex items-center justify-around ">
            <Button className="flex space-x-2">
              <IoBagHandleSharp className=" fill-[#003C60] w-[20px] h-[20px]" />
              <span className="font-actor text-[#003C60] text-[14px] font-bold">
                Mis compras
              </span>
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <Button>
              <PiHeartBold className=" fill-[#003C60] w-[30px] h-[30px]" />
            </Button>
          </div>
          <div className="flex items-center">
            <Button>
              <BsCart4 className=" fill-[#003C60] w-[30px] h-[30px]" />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center overflow-hidden h-[580px]">
        <CarouselOffers items={mainBanner} />
      </div>
      <div className="flex h-[67px] items-center justify-center">
        <div className="flex h-[34px] w-[825px] items-center justify-between text-[14px]">
          <Button>
            <div className="flex space-x-2 w-[189px] justify-center items-center  bg-[#003C60FF] font-actor text-white h-[34px]">
              <Kitchen />
              <span>Cocina</span>
            </div>
          </Button>
          <Button>
            <div className="flex space-x-2 w-[189px] justify-center items-center bg-[#CDCDCAFF] h-[34px]">
              <Accessories />
              <span className="font-actor text-black">Accesorios</span>
            </div>
          </Button>
          <Button>
            <div className="flex space-x-2 w-[189px] justify-center items-center bg-[#CDCDCAFF] h-[34px]">
              <TbHanger />
              <span className="font-actor text-black">Ropa</span>
            </div>
          </Button>
          <Button>
            <div className="flex space-x-2 w-[189px] justify-center items-center bg-[#CDCDCAFF] h-[34px]">
              <PiHighHeel />
              <span className="font-actor text-black">Calzados</span>
            </div>
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <span className="font-actor font-bold text-[#171A1FFF] text-[32px]">
          Ofertas exclusivas
        </span>
      </div>
      <div className="flex items-center justify-center">
        <Button>
          <Image src={WeeklyOffers} alt="Ofertas Semanales" width={1100} />
        </Button>
      </div>

      <div className="mb-[55px]">
        <CarouselProducts items={kitchen} title="Cocina" />
        <CarouselProducts items={accesories} title="Accesorios" />
        <CarouselProducts items={clothes} title="Ropa" />
        <CarouselProducts items={footwear} title="Calzados" />
      </div>

      <div className=" bg-[#F3F4F6FF] h-[276px] px-[30px] ">
        <div className="my-8">
          <Image src={Logo} alt="MegaCart Logo" height={48} />
        </div>
        <div className="flex items-start justify-around font-actor my-2 ">
          <div className="flex flex-col justify-center items-start space-y-2">
            <span className="text-[20px] text-[#323842FF] font-semibold">
              Te ayudamos
            </span>
            {[
              "Libro de reclamaciones",
              "Atencion por WhatsApp",
              "Seguimiento a mi orden",
              "Politica de prevecion de delitos",
            ].map((item, index) => (
              <Button key={index}>
                <span className="text-[14px] text-[#323842FF] font-actor">
                  {item}
                </span>
              </Button>
            ))}
          </div>
          <div className="flex flex-col justify-center items-start space-y-2  font-actor">
            <span className="text-[20px] text-[#323842FF] font-semibold">
              Mi pedido
            </span>
            {[
              "Cambios y devoluciones",
              "Seguimiento a mi orden",
              "Inversionistas",
            ].map((item, index) => (
              <Button key={index}>
                <span className="text-[14px] text-[#323842FF]">{item}</span>
              </Button>
            ))}
          </div>
          <div className="flex flex-col justify-center items-start space-y-2">
            <span className="text-[20px] font-semibold">Empresa</span>
            {[
              "Política de privacidad",
              "Ubicación",
              "Términos y condiciones",
              "Libro de reclamaciones",
            ].map((item, index) => (
              <Button key={index}>
                <span className="text-[14px] text-[#323842FF]">{item}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-around h-[164px] bg-[#003C60FF] ">
        <div className="flex items-center h-[82px] space-x-10 text-white font-actor font-semibold ">
          {[
            "Terminos y condiciones",
            "Politica de cookies",
            "Politica de privacidad",
          ].map((item, index) => (
            <Button key={index}>
              <span>{item}</span>
            </Button>
          ))}
        </div>
        <div className="flex flex-col px-16 justify-center w-full h-[82px] border-t-2 border-t-white font-actor text-white">
          <span>Todos los derechos reservados</span>
          <span>
            Megacart.com Malecón Centenario Leoncio Prado 1111, Huánuo, Perú
          </span>
        </div>
      </div>
    </div>
  );
}
