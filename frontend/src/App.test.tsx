
import { render } from '@testing-library/react';
// import App from './App';
import * as renderer from 'react-test-renderer';
import { CreateUser } from './components/create-user';
import { PostGallery} from './components/post-list';
import { UserDetail } from './components/user-detail';
//import { UserList } from './components/user_list';

describe('Regression / Snapshot test', function () {    
    test('Snapshot for Create User', async function () {
        const tree = renderer.create(<CreateUser />).toJSON();
        expect(tree).toMatchSnapshot();   
    });
    test('Snapshot for User Detail', async function () {
        const tree = renderer.create(<UserDetail userID={1}/>).toJSON();
        expect(tree).toMatchSnapshot();   
    });
    test('Snapshot for Post List', async function () {
        const tree = renderer.create(<PostGallery />).toJSON();
        expect(tree).toMatchSnapshot();   
    });
    // test('Snapshot for User List', async function () {
    //     const [, setuserID] = useState(0);
    //     const tree = renderer.create(<UserList setuserID = {setuserID}></UserList>).toJSON();
    //     expect(tree).toMatchSnapshot();   
    // });
    
});

describe('Component Testing', function () {  
    test('renders Create User', () => {
        const { getByText } = render(<CreateUser />);
        const textElement = getByText(/Enter your name/i);
        expect(textElement).toBeInTheDocument();
    });
    test('renders Post List', () => {
        const { getByText } = render(<PostGallery />);
        const textElement = getByText(/Posts/i);
        expect(textElement).toBeInTheDocument();
    });    
});
