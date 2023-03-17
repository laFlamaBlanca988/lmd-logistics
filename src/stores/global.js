import { defineStore, acceptHMRUpdate } from "pinia";
import { ref } from "@vue/reactivity";
import fleetTruck_1 from "@/assets/images/fleet-truck-1.png";
import fleetTruck_2 from "@/assets/images/fleet-truck-2.png";
import fleetTruck_3 from "@/assets/images/fleet-truck-3.png";
import fleetTruck_4 from "@/assets/images/fleet-truck-4.png";
import whyUsImage_1 from "@/assets/images/why-us-image-1.png";
import whyUsImage_2 from "@/assets/images/why-us-image-2.png";
import whyUsImage_3 from "@/assets/images/why-us-image-3.png";
import whyUsImage_4 from "@/assets/images/why-us-image-4.png";
export const useGlobalStore = defineStore("global", () => {
  let fleetModalIsActive = ref(false);
  let fleetModalData = ref({});
  let fleetData = ref([
    {
      url: fleetTruck_1,
      id: 1,
      model: "1",
      modelTitle: "Volvo VNR represents the future of regional haul.",
      modelDescription:
        "This truck does not compromise, delivering productivity and efficiency with quality and long-haul amenities. The standard cab offers a spacious interior with plenty of leg room, and it's equipped with air conditioning and heating to keep you comfortable in any weather. The engine is durable and powerful, allowing you to haul large loads with ease. ",
      year: "2019 and up",
      horsePower: "455 hp",
      engineModel: "VED13",
      transmission: "Automatic and Manual",
      sleeperSize: "77 inc",
      footerText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      url: fleetTruck_2,
      id: 2,
      model: "2",
      modelTitle: "Volvo VNR represents the future of regional haul.",
      modelDescription:
        "This truck does not compromise, delivering productivity and efficiency with quality and long-haul amenities. The standard cab offers a spacious interior with plenty of leg room, and it's equipped with air conditioning and heating to keep you comfortable in any weather. The engine is durable and powerful, allowing you to haul large loads with ease. ",
      year: "2019 and up",
      horsePower: "455 hp",
      engineModel: "VED13",
      transmission: "Automatic and Manual",
      sleeperSize: "77 inc",
      footerText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      url: fleetTruck_3,
      id: 3,
      model: "3",
      modelTitle: "Volvo VNR represents the future of regional haul.",
      modelDescription:
        "This truck does not compromise, delivering productivity and efficiency with quality and long-haul amenities. The standard cab offers a spacious interior with plenty of leg room, and it's equipped with air conditioning and heating to keep you comfortable in any weather. The engine is durable and powerful, allowing you to haul large loads with ease. ",
      year: "2019 and up",
      horsePower: "455 hp",
      engineModel: "VED13",
      transmission: "Automatic and Manual",
      sleeperSize: "77 inc",
      footerText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      url: fleetTruck_4,
      id: 4,
      model: "4",
      modelTitle: "Volvo VNR represents the future of regional haul.",
      modelDescription:
        "This truck does not compromise, delivering productivity and efficiency with quality and long-haul amenities. The standard cab offers a spacious interior with plenty of leg room, and it's equipped with air conditioning and heating to keep you comfortable in any weather. The engine is durable and powerful, allowing you to haul large loads with ease. ",
      year: "2019 and up",
      horsePower: "455 hp",
      engineModel: "VED13",
      transmission: "Automatic and Manual",
      sleeperSize: "77 inc",
      footerText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
  ]);
  let whyUsCards = ref([
    {
      title: "HIGH EARNINGS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      backgroundImage: whyUsImage_1,
    },
    {
      title: "GOOD MAINTENANCE",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      backgroundImage: whyUsImage_2,
    },
    {
      title: "24/7 SUPPORT",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      backgroundImage: whyUsImage_3,
    },
    {
      title: "BEST PAYING LOADS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      backgroundImage: whyUsImage_4,
    },
  ]);
  return {
    fleetModalIsActive,
    fleetData,
    fleetModalData,
    whyUsCards,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot));
}
