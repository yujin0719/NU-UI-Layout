import Detail from '../components/detail';
import Video from '../components/detail/video';
import BottomPanel from '../components/detail/bottom-panel';
import SideNav from '../components/detail/side-nav';
import Layout from '../components/common/layout';

import { useVideoMode } from '../hooks/useVideoMode';

export default function DetailPage() {
  const { videoMode, handleChangeMode } = useVideoMode();

  return (
    <Layout>
      <Detail
        video={
          <Video videoMode={videoMode} onChangeWideMode={handleChangeMode} />
        }
        bottomPanel={<BottomPanel />}
        sideNav={<SideNav />}
        videoMode={videoMode}
      />
    </Layout>
  );
}
