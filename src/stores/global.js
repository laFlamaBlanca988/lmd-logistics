import { defineStore, acceptHMRUpdate } from "pinia";
import { ref } from "@vue/reactivity";
import fleetTruck_1 from "@/assets/images/fleet-truck-1.webp";
import fleetTruck_2 from "@/assets/images/fleet-truck-2.webp";
import fleetTruck_3 from "@/assets/images/fleet-truck-3.webp";
import fleetTruck_4 from "@/assets/images/fleet-truck-4.webp";
import modalFleetTruck_1 from "@/assets/images/modal-fleet-truck-1.webp";
import modalFleetTruck_2 from "@/assets/images/modal-fleet-truck-2.webp";
import modalFleetTruck_3 from "@/assets/images/modal-fleet-truck-3.webp";
import modalFleetTruck_4 from "@/assets/images/modal-fleet-truck-4.webp";
import whyUsImage_1 from "@/assets/images/icon-high-earnings.svg";
import whyUsImage_2 from "@/assets/images/icon-good-maintenance.svg";
import whyUsImage_3 from "@/assets/images/icon-247-support.svg";
import whyUsImage_4 from "@/assets/images/icon-best-paying-loads.svg";

export const useGlobalStore = defineStore("global", () => {
  let fleetModalIsActive = ref(false);
  let navbarMobileIsActive = ref(false);
  let fleetData = ref([
    {
      id: 1,
      carouselImageUrl: fleetTruck_1,
      modalImageUrl: modalFleetTruck_1,
      model: "VOLVO",
      modelTitle: "Volvo represents the future of regional haul.",
      modelDescription:
        "This truck does not compromise, delivering productivity and efficiency with quality and long-haul amenities. The standard cab offers a spacious interior with plenty of leg room, and it's equipped with air conditioning and heating to keep you comfortable in any weather. The engine is durable and powerful, allowing you to haul large loads with ease.",
      year: "2019 and up",
      horsePower: "455 hp",
      engineModel: "VED13",
      transmission: "Automatic",
      sleeperSize: "77 inc",
      footerText:
        "Join our team and be part of a dynamic and innovative company that values its employees.",
    },
    {
      id: 2,
      carouselImageUrl: fleetTruck_2,
      modalImageUrl: modalFleetTruck_2,
      model: "KENWORTH",
      modelTitle: "Kenworth is a truck with power and style.",
      modelDescription:
        "The Kenworth is one of the best trucks on the market. It has a large cab, which means you can fit more in it. The truck is also strong and durable, making it perfect for long-haul driving.",
      year: "2018 and up",
      horsePower: "455 hp",
      engineModel: "ISX15",
      transmission: "Automatic and Manual",
      sleeperSize: "76 inc",
      footerText:
        "Join our team and be part of a dynamic and innovative company that values its employees.",
    },
    {
      id: 3,
      carouselImageUrl: fleetTruck_3,
      modalImageUrl: modalFleetTruck_3,
      model: "PETERBILT",
      modelTitle: "Peterbilt is known for their durability and reliability.",
      modelDescription:
        "The Peterbilt truck model is a classic, one of the most well-known trucks on the road. It is known for its reliability and durability. The Peterbilt features a wide variety of options, including a sleeper cab, an aerodynamic hood, and a Cummins ISX engine. It comes in three different cab styles: conventional, day cab, and high roof.",
      year: "2019 and up",
      horsePower: "455 hp",
      engineModel: "ISX15",
      transmission: "Manual",
      sleeperSize: "72 inc",
      footerText:
        "Join our team and be part of a dynamic and innovative company that values its employees.",
    },
    {
      id: 4,
      carouselImageUrl: fleetTruck_4,
      modalImageUrl: modalFleetTruck_4,
      model: "INTERNATIONAL",
      modelTitle: "International LT is an all-new, fully redesigned truck.",
      modelDescription:
        "The International LT truck is an all-around great choice for those who need to transport heavy cargo. It's got a powerful engine, a spacious interior for cargo, and even enough room for people to ride comfortably.",
      year: "2019 and up",
      horsePower: "455 hp",
      engineModel: "ISX15",
      transmission: "Automatic",
      sleeperSize: "73 inc",
      footerText:
        "Join our team and be part of a dynamic and innovative company that values its employees.",
    },
  ]);
  let whyUsCards = ref([
    {
      title: "HIGH EARNINGS",
      description:
        "Drive towards your financial goals with a career in transportation where every mile you travel brings you closer to financial success.",
      backgroundImage: whyUsImage_1,
    },
    {
      title: "GOOD MAINTENANCE",
      description:
        "Keeping your truck in top condition is not only our top priority but it also demonstrates our commitment to excellence in the industry.",
      backgroundImage: whyUsImage_2,
    },
    {
      title: "24/7 SUPPORT",
      description:
        "In the fast-paced world of transportation, providing 24/7 support shows that we are always there for our customers.",
      backgroundImage: whyUsImage_3,
    },
    {
      title: "BEST PAYING LOADS",
      description:
        "By seeking out and securing the best paying loads, you can drive your career and earnings to new heights with our support.",
      backgroundImage: whyUsImage_4,
    },
  ]);

  const handleScroll = (element) => {
    if (window.scrollY >= 42) {
      stickyStyle.value = ["fixed", "top-0", "w-100vh", "right-0", "left-0"];
    } else {
      stickyStyle.value = [];
    }
  };
  const toggleMenu = () => {
    navbarMobileIsActive.value = !navbarMobileIsActive.value;
  };
  return {
    fleetModalIsActive,
    navbarMobileIsActive,
    toggleMenu,
    handleScroll,
    fleetData,
    whyUsCards,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot));
}
