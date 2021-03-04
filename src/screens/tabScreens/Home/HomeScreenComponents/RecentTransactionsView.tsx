import React, { useRef } from "react";
import { ScrollView } from "react-native";
import { useScrollToTop } from "@react-navigation/native";

//COMPONENT IMPORTS
import RecentCredit from "./RecentCredit";
import RecentDebit from "./RecentDebit";

const HomeScreen: React.FC = () => {
  const ref = useRef<ScrollView | null>(null);
  useScrollToTop(ref);

  return (
    <>
      <RecentDebit
        recentAmount="50,000.00"
        recentName="Mcgobo Gampi"
        recentTime="6:10pm"
      />

      <RecentDebit
        recentAmount="50,000.00"
        recentName="Mcgobo Gampi"
        recentTime="6:10pm"
      />

      <RecentCredit
        recentAmount="500,000.00"
        recentName="Mcgobo Gampi"
        recentTime="6:10pm"
      />

      <RecentDebit
        recentAmount="250,000.00"
        recentName="Mcgobo Gampi"
        recentTime="6:10pm"
      />

      <RecentDebit
        recentAmount="5,000.00"
        recentName="Mcgobo Gampi"
        recentTime="6:10pm"
      />

      <RecentCredit
        recentAmount="500,000.00"
        recentName="Mcgobo Gampi"
        recentTime="6:10pm"
      />

      <RecentCredit
        recentAmount="500,000.00"
        recentName="Mcgobo Gampi"
        recentTime="6:10pm"
      />

      <RecentCredit
        recentAmount="500,000.00"
        recentName="Mcgobo Gampi"
        recentTime="6:10pm"
      />

      <RecentCredit
        recentAmount="500,000.00"
        recentName="Mcgobo Gampi"
        recentTime="6:10pm"
      />

      <RecentCredit
        recentAmount="500,000.00"
        recentName="Mcgobo Gampi"
        recentTime="6:10pm"
      />

      <RecentCredit
        recentAmount="500,000.00"
        recentName="Mcgobo Gampi"
        recentTime="6:10pm"
      />

      <RecentCredit
        recentAmount="500,000.00"
        recentName="Mcgobo Gampi"
        recentTime="6:10pm"
      />
    </>
  );
};

export default HomeScreen;
