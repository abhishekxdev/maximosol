"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconTarget,
  IconUsers,
  IconGlobe,
  IconAward,
  IconRocket,
  IconShield,
  IconStar,
  IconLock,
  IconTrendingUp,
  IconCheck,
  IconClock,
  IconDatabase,
  IconHeadset,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function AboutHeroBento() {
  return (
    <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem]">
      {heroItems.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

export function AboutStatsBento() {
  return (
    <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[15rem]">
      {statsItems.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

export function AboutValuesBento() {
  return (
    <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[18rem]">
      {valuesItems.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

// Hero Section Skeletons
const HeroSkeletonOne = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-1 w-full h-full min-h-[6rem] flex-col space-y-4"
    >
      <div className="flex items-center space-x-4">
        <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
          <IconTarget className="h-6 w-6 text-white" />
        </div>
        <div>
          <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-24"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-3 bg-gray-200 rounded w-full"></div>
        <div className="h-3 bg-gray-200 rounded w-3/4"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
      </div>
    </motion.div>
  );
};

const HeroSkeletonTwo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex flex-1 w-full h-full min-h-[6rem] relative overflow-hidden rounded-xl"
    >
      <Image
        src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
        alt="Team collaboration"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-lg font-semibold">Global Team</h3>
        <p className="text-sm opacity-90">Collaborating worldwide</p>
      </div>
    </motion.div>
  );
};

const HeroSkeletonThree = () => {
  const variants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
  };
  
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex flex-1 w-full h-full min-h-[6rem] flex-col space-y-3"
    >
      <div className="flex items-center space-x-3">
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
          <IconUsers className="h-4 w-4 text-white" />
        </div>
        <div className="text-sm font-medium">Expert Team</div>
      </div>
      <div className="space-y-2">
        <div className="h-2 bg-gray-200 rounded w-full"></div>
        <div className="h-2 bg-gray-200 rounded w-4/5"></div>
        <div className="h-2 bg-gray-200 rounded w-3/5"></div>
      </div>
      <div className="flex space-x-2 mt-auto">
        <div className="h-6 w-6 rounded-full bg-blue-500"></div>
        <div className="h-6 w-6 rounded-full bg-purple-500"></div>
        <div className="h-6 w-6 rounded-full bg-green-500"></div>
        <div className="h-6 w-6 rounded-full bg-orange-500"></div>
      </div>
    </motion.div>
  );
};

// Stats Section Skeletons
const StatsSkeletonOne = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="flex flex-1 w-full h-full min-h-[6rem] items-center justify-center"
    >
      <div className="text-center">
        <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
        <div className="text-sm text-gray-600">Projects Completed</div>
      </div>
    </motion.div>
  );
};

const StatsSkeletonTwo = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
      className="flex flex-1 w-full h-full min-h-[6rem] items-center justify-center"
    >
      <div className="text-center">
        <div className="text-4xl font-bold text-purple-600 mb-2">50M+</div>
        <div className="text-sm text-gray-600">Data Points Annotated</div>
      </div>
    </motion.div>
  );
};

const StatsSkeletonThree = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
      className="flex flex-1 w-full h-full min-h-[6rem] items-center justify-center"
    >
      <div className="text-center">
        <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
        <div className="text-sm text-gray-600">Accuracy Rate</div>
      </div>
    </motion.div>
  );
};

const StatsSkeletonFour = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
      className="flex flex-1 w-full h-full min-h-[6rem] items-center justify-center"
    >
      <div className="text-center">
        <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
        <div className="text-sm text-gray-600">Support Available</div>
      </div>
    </motion.div>
  );
};

// Values Section Skeletons
const ValuesSkeletonOne = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-1 w-full h-full min-h-[6rem] flex-col items-center justify-center space-y-3"
    >
      <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
        <IconRocket className="h-6 w-6 text-white" />
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-lg">Innovation</h3>
        <p className="text-sm text-gray-600 mt-2">Pushing boundaries in AI</p>
      </div>
    </motion.div>
  );
};

const ValuesSkeletonTwo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="flex flex-1 w-full h-full min-h-[6rem] flex-col items-center justify-center space-y-3"
    >
      <div className="h-12 w-12 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
        <IconShield className="h-6 w-6 text-white" />
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-lg">Integrity</h3>
        <p className="text-sm text-gray-600 mt-2">Highest ethical standards</p>
      </div>
    </motion.div>
  );
};

const ValuesSkeletonThree = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex flex-1 w-full h-full min-h-[6rem] flex-col items-center justify-center space-y-3"
    >
      <div className="h-12 w-12 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
        <IconStar className="h-6 w-6 text-white" />
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-lg">Excellence</h3>
        <p className="text-sm text-gray-600 mt-2">Exceptional quality delivery</p>
      </div>
    </motion.div>
  );
};

const ValuesSkeletonFour = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex flex-1 w-full h-full min-h-[6rem] flex-col items-center justify-center space-y-3"
    >
      <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
        <IconUsers className="h-6 w-6 text-white" />
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-lg">Collaboration</h3>
        <p className="text-sm text-gray-600 mt-2">Working closely with clients</p>
      </div>
    </motion.div>
  );
};

const ValuesSkeletonFive = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="flex flex-1 w-full h-full min-h-[6rem] flex-col items-center justify-center space-y-3"
    >
      <div className="h-12 w-12 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center">
        <IconLock className="h-6 w-6 text-white" />
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-lg">Security</h3>
        <p className="text-sm text-gray-600 mt-2">Robust data protection</p>
      </div>
    </motion.div>
  );
};

const ValuesSkeletonSix = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="flex flex-1 w-full h-full min-h-[6rem] flex-col items-center justify-center space-y-3"
    >
      <div className="h-12 w-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
        <IconTrendingUp className="h-6 w-6 text-white" />
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-lg">Scalability</h3>
        <p className="text-sm text-gray-600 mt-2">Growing with your business</p>
      </div>
    </motion.div>
  );
};

const heroItems = [
  {
    title: "Our Mission",
    description: (
      <span className="text-sm">
        Empowering AI innovation through quality data annotation and labeling services.
      </span>
    ),
    header: <HeroSkeletonOne />,
    className: "md:col-span-1",
    icon: <IconTarget className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Global Team",
    description: (
      <span className="text-sm">
        Collaborating worldwide to deliver exceptional results for our clients.
      </span>
    ),
    header: <HeroSkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconGlobe className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Expert Team",
    description: (
      <span className="text-sm">
        Skilled professionals with deep domain expertise across industries.
      </span>
    ),
    header: <HeroSkeletonThree />,
    className: "md:col-span-1",
    icon: <IconUsers className="h-4 w-4 text-neutral-500" />,
  },
];

const statsItems = [
  {
    title: "500+ Projects",
    description: (
      <span className="text-sm">
        Successfully completed across various industries and domains.
      </span>
    ),
    header: <StatsSkeletonOne />,
    className: "md:col-span-1",
    icon: <IconCheck className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "50M+ Data Points",
    description: (
      <span className="text-sm">
        High-quality annotations delivered with precision and accuracy.
      </span>
    ),
    header: <StatsSkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconDatabase className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "99.9% Accuracy",
    description: (
      <span className="text-sm">
        Industry-leading precision in all our data annotation projects.
      </span>
    ),
    header: <StatsSkeletonThree />,
    className: "md:col-span-1",
    icon: <IconAward className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "24/7 Support",
    description: (
      <span className="text-sm">
        Round-the-clock assistance and support for all our clients.
      </span>
    ),
    header: <StatsSkeletonFour />,
    className: "md:col-span-1",
    icon: <IconHeadset className="h-4 w-4 text-neutral-500" />,
  },
];

const valuesItems = [
  {
    title: "Innovation",
    description: (
      <span className="text-sm">
        Continuously pushing boundaries to deliver cutting-edge solutions.
      </span>
    ),
    header: <ValuesSkeletonOne />,
    className: "md:col-span-1",
    icon: <IconRocket className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Integrity",
    description: (
      <span className="text-sm">
        Maintaining the highest ethical standards in all our operations.
      </span>
    ),
    header: <ValuesSkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconShield className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Excellence",
    description: (
      <span className="text-sm">
        Delivering exceptional quality that exceeds expectations.
      </span>
    ),
    header: <ValuesSkeletonThree />,
    className: "md:col-span-1",
    icon: <IconStar className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Collaboration",
    description: (
      <span className="text-sm">
        Working closely with clients to understand their unique needs.
      </span>
    ),
    header: <ValuesSkeletonFour />,
    className: "md:col-span-1",
    icon: <IconUsers className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Security",
    description: (
      <span className="text-sm">
        Implementing robust security measures to protect sensitive data.
      </span>
    ),
    header: <ValuesSkeletonFive />,
    className: "md:col-span-1",
    icon: <IconLock className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Scalability",
    description: (
      <span className="text-sm">
        Building solutions that grow with your business needs.
      </span>
    ),
    header: <ValuesSkeletonSix />,
    className: "md:col-span-1",
    icon: <IconTrendingUp className="h-4 w-4 text-neutral-500" />,
  },
];