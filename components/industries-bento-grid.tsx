"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconHeart,
  IconCar,
  IconCash,
  IconShoppingCart,
  IconBuildingFactory,
  IconDeviceGamepad2,
  IconShield,
  IconBolt,
  IconArrowRight,
  IconCheck,
  IconUsers,
  IconGlobe,
  IconDatabase,
  IconClock,
  IconPlant2,
  IconMap,
  IconHeadphones,
  IconPhone,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function IndustriesBentoGrid() {
  return (
    <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[25rem]">
      {industryItems.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn(
            "[&>p:text-lg] bg-white/60 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1",
            item.className
          )}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

// Industry Section Skeletons
const HealthcareSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-1 w-full h-full min-h-[6rem] relative overflow-hidden rounded-xl"
    >
      <Image
        src="/healthcare.jpeg"
        alt="Healthcare"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-white">
        <div className="flex items-center space-x-2 mb-2">
          <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center">
            <IconHeart className="h-4 w-4 text-white" />
          </div>
          <h3 className="text-lg font-semibold">Healthcare & Medical AI</h3>
        </div>
        <div className="flex flex-wrap gap-1">
          <Badge variant="secondary" className="text-xs">Medical Imaging</Badge>
          <Badge variant="secondary" className="text-xs">Radiology</Badge>
          <Badge variant="secondary" className="text-xs">Clinical Data</Badge>
        </div>
      </div>
    </motion.div>
  );
};

const AutomotiveSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="flex flex-1 w-full h-full min-h-[6rem] relative overflow-hidden rounded-xl"
    >
      <Image
        src="/Automotive.jpeg"
        alt="Automotive"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-white">
        <div className="flex items-center space-x-2 mb-2">
          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
            <IconCar className="h-4 w-4 text-white" />
          </div>
          <h3 className="text-lg font-semibold">Automotive & Autonomous</h3>
        </div>
        <div className="flex flex-wrap gap-1">
          <Badge variant="secondary" className="text-xs">LiDAR</Badge>
          <Badge variant="secondary" className="text-xs">ADAS</Badge>
          <Badge variant="secondary" className="text-xs">Self-Driving</Badge>
        </div>
      </div>
    </motion.div>
  );
};

const FinanceSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex flex-1 w-full h-full min-h-[6rem] relative overflow-hidden rounded-xl"
    >
      <Image
        src="/fintech.jpeg"
        alt="Finance"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-white">
        <div className="flex items-center space-x-2 mb-2">
          <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
            <IconCash className="h-4 w-4 text-white" />
          </div>
          <h3 className="text-lg font-semibold">Finance & FinTech</h3>
        </div>
        <div className="flex flex-wrap gap-1">
          <Badge variant="secondary" className="text-xs">Fraud Detection</Badge>
          <Badge variant="secondary" className="text-xs">Risk Assessment</Badge>
          <Badge variant="secondary" className="text-xs">Compliance</Badge>
        </div>
      </div>
    </motion.div>
  );
};

const RetailSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex flex-1 w-full h-full min-h-[6rem] relative overflow-hidden rounded-xl"
    >
      <Image
        src="/retail.jpeg"
        alt="Retail"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-white">
        <div className="flex items-center space-x-2 mb-2">
          <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center">
            <IconShoppingCart className="h-4 w-4 text-white" />
          </div>
          <h3 className="text-lg font-semibold">Retail & E-commerce</h3>
        </div>
        <div className="flex flex-wrap gap-1">
          <Badge variant="secondary" className="text-xs">Product Catalog</Badge>
          <Badge variant="secondary" className="text-xs">Recommendations</Badge>
          <Badge variant="secondary" className="text-xs">Customer Analytics</Badge>
        </div>
      </div>
    </motion.div>
  );
};

const AgricultureSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="flex flex-1 w-full h-full min-h-[6rem] relative overflow-hidden rounded-xl"
    >
      <Image
        src="/agriculture.jpeg"
        alt="Agriculture"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-white">
        <div className="flex items-center space-x-2 mb-2">
          <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center">
            <IconPlant2 className="h-4 w-4 text-white" />
          </div>
          <h3 className="text-lg font-semibold">Agriculture</h3>
        </div>
        <div className="flex flex-wrap gap-1">
          <Badge variant="secondary" className="text-xs">Crop Monitoring</Badge>
          <Badge variant="secondary" className="text-xs">Yield Prediction</Badge>
          <Badge variant="secondary" className="text-xs">Agri AI</Badge>
        </div>
      </div>
    </motion.div>
  );
};

const GamingSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="flex flex-1 w-full h-full min-h-[6rem] relative overflow-hidden rounded-xl"
    >
      <Image
        src="/gaming.jpeg"
        alt="Gaming"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-white">
        <div className="flex items-center space-x-2 mb-2">
          <div className="h-8 w-8 rounded-full bg-pink-500 flex items-center justify-center">
            <IconDeviceGamepad2 className="h-4 w-4 text-white" />
          </div>
          <h3 className="text-lg font-semibold">Gaming & Entertainment</h3>
        </div>
        <div className="flex flex-wrap gap-1">
          <Badge variant="secondary" className="text-xs">Character AI</Badge>
          <Badge variant="secondary" className="text-xs">Behavior Analysis</Badge>
          <Badge variant="secondary" className="text-xs">Content Moderation</Badge>
        </div>
      </div>
    </motion.div>
  );
};

const SecuritySkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="flex flex-1 w-full h-full min-h-[6rem] relative overflow-hidden rounded-xl"
    >
      <Image
        src="/survilleance.jpeg"
        alt="Security"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-white">
        <div className="flex items-center space-x-2 mb-2">
          <div className="h-8 w-8 rounded-full bg-gray-500 flex items-center justify-center">
            <IconShield className="h-4 w-4 text-white" />
          </div>
          <h3 className="text-lg font-semibold">Security & Surveillance</h3>
        </div>
        <div className="flex flex-wrap gap-1">
          <Badge variant="secondary" className="text-xs">Threat Detection</Badge>
          <Badge variant="secondary" className="text-xs">Facial Recognition</Badge>
          <Badge variant="secondary" className="text-xs">Access Control</Badge>
        </div>
      </div>
    </motion.div>
  );
};

const EnergySkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="flex flex-1 w-full h-full min-h-[6rem] relative overflow-hidden rounded-xl"
    >
      <Image
        src="/energy.jpeg"
        alt="Energy"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-white">
        <div className="flex items-center space-x-2 mb-2">
          <div className="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center">
            <IconBolt className="h-4 w-4 text-white" />
          </div>
          <h3 className="text-lg font-semibold">Energy & Utilities</h3>
        </div>
        <div className="flex flex-wrap gap-1">
          <Badge variant="secondary" className="text-xs">Smart Grid</Badge>
          <Badge variant="secondary" className="text-xs">Renewable Energy</Badge>
          <Badge variant="secondary" className="text-xs">Infrastructure</Badge>
        </div>
      </div>
    </motion.div>
  );
};

const GeospatialSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="flex flex-1 w-full h-full min-h-[6rem] relative overflow-hidden rounded-xl"
    >
      <Image
        src="/agriculture.jpeg"
        alt="Geospatial"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-white">
        <div className="flex items-center space-x-2 mb-2">
          <div className="h-8 w-8 rounded-full bg-teal-500 flex items-center justify-center">
            <IconMap className="h-4 w-4 text-white" />
          </div>
          <h3 className="text-lg font-semibold">Geospatial & Mapping</h3>
        </div>
        <div className="flex flex-wrap gap-1">
          <Badge variant="secondary" className="text-xs">Satellite Imagery</Badge>
          <Badge variant="secondary" className="text-xs">GIS Analysis</Badge>
          <Badge variant="secondary" className="text-xs">Location Intelligence</Badge>
        </div>
      </div>
    </motion.div>
  );
};

const CustomerSupportSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.9 }}
      className="flex flex-1 w-full h-full min-h-[6rem] relative overflow-hidden rounded-xl"
    >
      <Image
        src="/team.jpeg"
        alt="Customer Support"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-white">
        <div className="flex items-center space-x-2 mb-2">
          <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center">
            <IconHeadphones className="h-4 w-4 text-white" />
          </div>
          <h3 className="text-lg font-semibold">Customer Support</h3>
        </div>
        <div className="flex flex-wrap gap-1">
          <Badge variant="secondary" className="text-xs">24/7 Support</Badge>
          <Badge variant="secondary" className="text-xs">Multi-channel</Badge>
          <Badge variant="secondary" className="text-xs">Technical Help</Badge>
        </div>
      </div>
    </motion.div>
  );
};

const TeleSalesSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 1.0 }}
      className="flex flex-1 w-full h-full min-h-[6rem] relative overflow-hidden rounded-xl"
    >
      <Image
        src="/fintech.jpeg"
        alt="Tele Sales"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-white">
        <div className="flex items-center space-x-2 mb-2">
          <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center">
            <IconPhone className="h-4 w-4 text-white" />
          </div>
          <h3 className="text-lg font-semibold">Tele Sales</h3>
        </div>
        <div className="flex flex-wrap gap-1">
          <Badge variant="secondary" className="text-xs">Lead Generation</Badge>
          <Badge variant="secondary" className="text-xs">Sales Conversion</Badge>
          <Badge variant="secondary" className="text-xs">Market Research</Badge>
        </div>
      </div>
    </motion.div>
  );
};

const industryItems = [
  {
    title: "Autonomous Vehicles",
    description: (
      <span className="text-sm">
        Driving innovation with accurate object detection and path planning data.
      </span>
    ),
    header: <AutomotiveSkeleton />,
    className: "md:col-span-1",
    icon: <IconCar className="h-4 w-4 text-blue-500" />,
  },
  {
    title: "Healthcare",
    description: (
      <span className="text-sm">
        Facilitating AI in diagnostics, medical imaging, and clinical decision-making.
      </span>
    ),
    header: <HealthcareSkeleton />,
    className: "md:col-span-1",
    icon: <IconHeart className="h-4 w-4 text-red-500" />,
  },
  {
    title: "E-commerce",
    description: (
      <span className="text-sm">
        Enhancing product recommendations and image-based search.
      </span>
    ),
    header: <RetailSkeleton />,
    className: "md:col-span-1",
    icon: <IconShoppingCart className="h-4 w-4 text-purple-500" />,
  },
  {
    title: "Agriculture",
    description: (
      <span className="text-sm">
        Supporting AI-powered crop monitoring and yield prediction.
      </span>
    ),
    header: <AgricultureSkeleton />,
    className: "md:col-span-1",
    icon: <IconPlant2 className="h-4 w-4 text-green-600" />,
  },
  {
    title: "Finance",
    description: (
      <span className="text-sm">
        Enabling fraud detection and sentiment analysis in financial markets.
      </span>
    ),
    header: <FinanceSkeleton />,
    className: "md:col-span-1",
    icon: <IconCash className="h-4 w-4 text-green-500" />,
  },
  {
    title: "Geospatial & Mapping",
    description: (
      <span className="text-sm">
        Powering location intelligence and satellite imagery analysis.
      </span>
    ),
    header: <GeospatialSkeleton />,
    className: "md:col-span-1",
    icon: <IconMap className="h-4 w-4 text-teal-500" />,
  },
  {
    title: "Customer Support",
    description: (
      <span className="text-sm">
        Delivering exceptional customer service and technical assistance.
      </span>
    ),
    header: <CustomerSupportSkeleton />,
    className: "md:col-span-1",
    icon: <IconHeadphones className="h-4 w-4 text-indigo-500" />,
  },
  {
    title: "Tele Sales",
    description: (
      <span className="text-sm">
        Driving business growth through professional telemarketing services.
      </span>
    ),
    header: <TeleSalesSkeleton />,
    className: "md:col-span-1",
    icon: <IconPhone className="h-4 w-4 text-orange-500" />,
  },
];