import React from "react";
import Head from "next/head";

import {
  HeroSection,
  FeaturesSection,
  GolfCoursesSection,
  GolfCommunitySection,
  DownloadAppSection,
  Footer,
  AboutGolferCommunitySection,
} from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Linked Golf | LinkedGolf is an app designed to help you build your
          golf network
        </title>
        <meta
          name="description"
          content="LinkedGolf is an app designed to help you build your golf network. Get out on the course more often by scheduling outings with your buddies whose golf availability matches yours."
        />
        <link rel="icon" href="/linked-golf-icon.png" />
      </Head>
      <HeroSection />
      <AboutGolferCommunitySection />
      <FeaturesSection />
      <GolfCoursesSection />
      <GolfCommunitySection />
      <DownloadAppSection />
      <Footer />
    </>
  );
}
