componentNames = [
"Calendar",
"ChatMessenger",
"CRMRecordDetail",
"DashboardKPI",
"DataTable",
"EcommercePDP",
"FilterGrid",
"FormBuilder ",
"KanbanBoard",
"LiveScore",
"MapListSplit",
"ProfileFeed",
"SearchResults",
"SettingsPage",
"SidebarContent",
"ThreeColumnFeed",
"VideoPlayer",
]

for name in componentNames:
    with open(f"./src/components/{name}.tsx", "w") as f:
        f.write(f"export function {name}() {{ return <div>{name}</div> }}")
