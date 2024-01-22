import "./Header.css"
export default function Header({isDarkMode}){

    return (
        <div className={`dashboard-header ${isDarkMode ? 'dark-mode' : ''}`}>
            <h1 className={`${isDarkMode ? 'dark-mode' : ''}`}>Student Dashboard</h1>
        </div>
    )
}