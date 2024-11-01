import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./pages";
import { ThemeProvider } from "./components/theme-provider";
// import { ModeToggle } from "./components/mode-toggle";
const App = () => {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="light"
			enableSystem
			disableTransitionOnChange
			// themes={[
			// 	"light",
			// 	"dark",
			// 	"light-green",
			// 	"dark-green",
			// 	"light-rose",
			// 	"dark-rose",
			// 	"light-yellow",
			// 	"dark-yellow",
			// 	"light-blue",
			// 	"dark-blue",
			// ]}
			storageKey="vite-ui-theme"
		>
			<BrowserRouter>
				<header className="w-full flex justify-between items-center bg-background sm:px-8 px-4 py-4 border-b border-b-muted-foreground/20">
					<Link to={"/"}>
						<img
							src={logo}
							alt="logo"
							className="w-28 object-contain dark:bg-foreground"
						/>
					</Link>
					<div className="flex items-center space-x-2">
						<div className="flex items-center border-r-muted">
							<Link
								to={"/create-post"}
								className="text-sm font-inter font-medium bg-primary text-background px-4 py-2 rounded-md"
							>
								Create
							</Link>
						</div>
						{/* <ModeToggle /> */}
					</div>
				</header>
				<main className="sm:p-8 px-4 py-8 w-full bg-secondary min-h-[calc(100vh-73px)]">
					<Routes>
						<Route path={"/"} element={<Home />} />
						<Route path={"/create-post"} element={<CreatePost />} />
					</Routes>
				</main>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
