import Detail from '../components/detail';
import Video from '../components/detail/video';
import BottomPanel from '../components/detail/bottom-panel';
import SideNav from '../components/detail/side-nav';
import Layout from '../components/common/layout';

import { useWideMode } from '../hooks/useWideMode';

export default function DetailPage() {
  const { isWideMode, handleChangeMode } = useWideMode(false);

  return (
    <Layout>
      <Detail
        video={<Video onChangeWideMode={handleChangeMode} />}
        bottomPanel={<BottomPanel />}
        sideNav={<SideNav />}
        isWideMode={isWideMode}
      />
    </Layout>
  );
}
