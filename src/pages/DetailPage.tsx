import styled from "@emotion/styled";
import Header from "../components/common/header";
import Footer from "../components/common/footer";
import Detail from "../components/detail";
import Video from "../components/detail/video";
import BottomPanel from "../components/detail/bottom-panel";
import SideNav from "../components/detail/side-nav";

interface DetailPageProps { 
}

export default function DetailPage({}:DetailPageProps) {
  return (
    <StyledDetailPageLayout>
      <section className="header">
        <Header />
      </section>
      
      <section className="main">
        <Detail
          video={<Video />}
          bottomPanel={<BottomPanel />}
          sideNav={<SideNav />}
        />
      </section>

      <section className="footer">
        <Footer />
      </section>
    </StyledDetailPageLayout>
  );
}

const StyledDetailPageLayout = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
  width: 100vw;
  height: 100%;

  background-color:#000;

  .header {
    width: 100vw;
    height: 80px; 
  }

  .footer {
    width: 100vw;
    height: 80px;
  }

  .main {
    display: flex;
    width: 1200px;
  }
`;
