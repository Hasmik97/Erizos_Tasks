import MyBrowser from './components/MyBrowser';
import Data from './Data';

function App() {
  return (
    <div>
        <MyBrowser data={Data} expandedFolders={['/Folder 1', '/Folder 2/Folder 2.1']} />
    </div>
  );
}

export default App;
