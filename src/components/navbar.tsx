export function Navbar({
	active,
	setActivePage: setActive,
}: {
	active: number;
	setActivePage: React.Dispatch<React.SetStateAction<number>>;
}) {
	return (
		<div className="h-14 border-b border-neutral-200 flex items-center px-4 gap-2 overflow-x-auto shrink-0">
			<span className="text-sm font-medium text-neutral-500 mr-2 shrink-0">
				Layouts:
			</span>
			<button
				onClick={() => setActive(0)}
				type="button"
				className={`px-3 py-1.5 cursor-pointer rounded text-xs font-medium whitespace-nowrap transition-colors ${active === 0 ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"}`}
			>
				3-Column Feed
			</button>
			<button
				onClick={() => setActive(1)}
				type="button"
				className={`px-3 py-1.5 cursor-pointer rounded text-xs font-medium whitespace-nowrap transition-colors ${active === 1 ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"}`}
			>
				Sidebar + Content
			</button>
			<button
				onClick={() => setActive(2)}
				type="button"
				className={`px-3 py-1.5 cursor-pointer rounded text-xs font-medium whitespace-nowrap transition-colors ${active === 2 ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"}`}
			>
				Filter + Grid
			</button>
			<button
				onClick={() => setActive(3)}
				type="button"
				className={`px-3 py-1.5 cursor-pointer rounded text-xs font-medium whitespace-nowrap transition-colors ${active === 3 ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"}`}
			>
				Map + List Split
			</button>
			<button
				onClick={() => setActive(4)}
				type="button"
				className={`px-3 py-1.5 cursor-pointer rounded text-xs font-medium whitespace-nowrap transition-colors ${active === 4 ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"}`}
			>
				Dashboard KPI
			</button>
			<button
				onClick={() => setActive(5)}
				type="button"
				className={`px-3 py-1.5 cursor-pointer rounded text-xs font-medium whitespace-nowrap transition-colors ${active === 5 ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"}`}
			>
				CRM Record Detail
			</button>
			<button
				onClick={() => setActive(6)}
				type="button"
				className={`px-3 py-1.5 cursor-pointer rounded text-xs font-medium whitespace-nowrap transition-colors ${active === 6 ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"}`}
			>
				Data Table
			</button>
			<button
				onClick={() => setActive(7)}
				type="button"
				className={`px-3 py-1.5 cursor-pointer rounded text-xs font-medium whitespace-nowrap transition-colors ${active === 7 ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"}`}
			>
				Kanban Board
			</button>
			<button
				onClick={() => setActive(8)}
				type="button"
				className={`px-3 py-1.5 cursor-pointer rounded text-xs font-medium whitespace-nowrap transition-colors ${active === 8 ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"}`}
			>
				Chat/Messenger
			</button>
			<button
				onClick={() => setActive(9)}
				type="button"
				className={`px-3 py-1.5 cursor-pointer rounded text-xs font-medium whitespace-nowrap transition-colors ${active === 9 ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"}`}
			>
				Profile + Feed
			</button>
			<button
				onClick={() => setActive(10)}
				type="button"
				className={`px-3 py-1.5 cursor-pointer rounded text-xs font-medium whitespace-nowrap transition-colors ${active === 10 ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"}`}
			>
				Search Results
			</button>
			<button
				onClick={() => setActive(11)}
				type="button"
				className={`px-3 py-1.5 cursor-pointer rounded text-xs font-medium whitespace-nowrap transition-colors ${active === 11 ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"}`}
			>
				Video Player
			</button>
			<button
				onClick={() => setActive(12)}
				type="button"
				className={`px-3 py-1.5 cursor-pointer rounded text-xs font-medium whitespace-nowrap transition-colors ${active === 12 ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"}`}
			>
				E-commerce PDP
			</button>
			<button
				onClick={() => setActive(13)}
				type="button"
				className={`px-3 py-1.5 cursor-pointer rounded text-xs font-medium whitespace-nowrap transition-colors ${active === 13 ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"}`}
			>
				Live Score
			</button>
			<button
				onClick={() => setActive(14)}
				type="button"
				className={`px-3 py-1.5 cursor-pointer rounded text-xs font-medium whitespace-nowrap transition-colors ${active === 14 ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"}`}
			>
				Settings Page
			</button>
			<button
				onClick={() => setActive(15)}
				type="button"
				className={`px-3 py-1.5 cursor-pointer rounded text-xs font-medium whitespace-nowrap transition-colors ${active === 15 ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"}`}
			>
				Calendar
			</button>
			<button
				onClick={() => setActive(16)}
				type="button"
				className={`px-3 py-1.5 cursor-pointer rounded text-xs font-medium whitespace-nowrap transition-colors ${active === 16 ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"}`}
			>
				Form Builder
			</button>
		</div>
	);
}
