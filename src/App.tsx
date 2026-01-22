import { useState } from "react";
import { Calendar } from "./components/Calendar";
import { ChatMessenger } from "./components/ChatMessenger";
import { CRMRecordDetail } from "./components/CRMRecordDetail";
import { DashboardKPI } from "./components/DashboardKPI";
import { DataTable } from "./components/DataTable";
import { EcommercePDP } from "./components/EcommercePDP";
import { FilterGrid } from "./components/FilterGrid";
import { FormBuilder } from "./components/FormBuilder ";
import { KanbanBoard } from "./components/KanbanBoard";
import { LiveScore } from "./components/LiveScore";
import { MapListSplit } from "./components/MapListSplit";
import { Navbar } from "./components/navbar";
import { ProfileFeed } from "./components/ProfileFeed";
import { SearchResults } from "./components/SearchResults";
import { SettingsPage } from "./components/SettingsPage";
import { SidebarContent } from "./components/SidebarContent";
import { ThreeColumnFeed } from "./components/ThreeColumnFeed";
import { VideoPlayer } from "./components/VideoPlayer";

const Components = [
	<ThreeColumnFeed key="3cf" />,
	<SidebarContent key="sidebar" />,
	<FilterGrid key="filter" />,
	<MapListSplit key="map" />,
	<DashboardKPI key="dashboard" />,
	<CRMRecordDetail key="crm" />,
	<DataTable key="data" />,
	<KanbanBoard key="kanban" />,
	<ChatMessenger key="chat" />,
	<ProfileFeed key="profile" />,
	<SearchResults key="search" />,
	<VideoPlayer key="video" />,
	<EcommercePDP key="ecom" />,
	<LiveScore key="score" />,
	<SettingsPage key="settings" />,
	<Calendar key="calen" />,
	<FormBuilder key="form-builder" />,
];

export default function App() {
	const [currentPage, setCurrentPage] = useState<number>(0);
	return (
		<div className="h-screen flex flex-col bg-white">
			<Navbar active={currentPage} setActivePage={setCurrentPage} />
			<div className="h-8 bg-neutral-100 border-b border-neutral-200 flex items-center px-4">
				<span className="text-xs text-neutral-500"></span>
			</div>
			<div className="flex-1 flex flex-col">{Components[currentPage]}</div>
		</div>
	);
}
