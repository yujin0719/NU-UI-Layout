import Video from '../components/detail/video';
import BottomPanel from '../components/detail/bottom-panel';
import SideNav from '../components/detail/side-nav';
import Layout from '../components/common/layout';

import { useVideoMode } from '../hooks/useVideoMode';
import DetailWithChat from '../components/detail/detail-with-chat';
import Chat from '../components/detail/chat';

export default function LiveDetailPage() {
  const { videoMode, handleChangeMode } = useVideoMode();

  return (
    <Layout>
      <DetailWithChat
        video={
          <Video videoMode={videoMode} onChangeWideMode={handleChangeMode} />
        }
        bottomPanel={<BottomPanel />}
        sideNav={<SideNav />}
        chat={<Chat />}
        videoMode={videoMode}
      />
    </Layout>
  );
}
