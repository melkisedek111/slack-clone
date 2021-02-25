import styled from 'styled-components';
import Spinner from '../../assets/spinner.svg';

export const SpinnerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    > img {
        height: 150px;
        object-fit: contain;
        color: white;
    }
`;

export const SidebarContainer = styled.div`
    background-color: var(--slack-color);
    color: white;
    flex: .3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;

    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b;
    }

    > img {
        align-self: center;
        display: hidden;
    }
`;

export const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;

    > .MuiSvgIcon-root {
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }
`;
export const SidebarInfo = styled.div`
    flex: 1;
    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }

    > h3 > .MuiSvgIcon-root {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`;

