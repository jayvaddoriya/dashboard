import React from "react";
import bgDashboard from "../assets/bg-dashboard-pge.webp";
import Header from "../layout/Header";
import { TitlePrimary } from "../components/Utility";
import Statistics from "../components/dashboard/Statistics";
import Announcement from "../components/dashboard/Announcement";
import AccountDetails from "../components/dashboard/AccountDetails";
import PurchasePack from "../components/dashboard/PurchasePack";
import PurchaseTree from "../components/dashboard/PurchaseTree";
const Dashboard = () => {
  return (
    <div className="bg-[#0B002B]">
      <Header />
      <main className="overflow-hidden relative px-4 py-6 md:p-6 min-h-screen">
        <div
          className="w-full h-full absolute top-0 start-0 bottom-0 end-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${bgDashboard})` }}
        ></div>
        <div className="space-y-8 xl:space-y-0 xl:grid xl:grid-cols-[400px_auto] 2xl:grid-cols-[500px_auto] gap-6 relative z-10">
          <div>
            <TitlePrimary>Dashboard</TitlePrimary>
            <div className="space-y-6">
              <PurchasePack />
              <AccountDetails />
              <PurchaseTree />
            </div>
          </div>
          <div className="space-y-12">
            <div>
              <TitlePrimary>Global Statistics</TitlePrimary>
              <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6">
                <Statistics bg="black" />
                <Statistics bg="gold" />
                <Statistics bg="black" />
                <Statistics bg="black" />
                <Statistics bg="gold" />
                <Statistics bg="black" />
              </div>
            </div>
            <div>
              <Announcement />
            </div>
            <div>
              <TitlePrimary>My Statistics</TitlePrimary>
              <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6">
                <Statistics bg="black" />
                <Statistics bg="gold" />
                <Statistics bg="black" />
                <Statistics bg="black" />
                <Statistics bg="gold" />
                <Statistics bg="black" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
