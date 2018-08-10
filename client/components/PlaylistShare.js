import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TumblrShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  TumblrIcon,
} from 'react-share';

const PlaylistShare = ({ url, name }) => {
  const iconOptions = {
    size: 50,
    logoFillColor: '#333',
    iconBgStyle: { fill: 'transparent' },
  };
  return (
    <div>
      <FacebookShareButton url={url} quote={name}>
        <FacebookIcon {...iconOptions} />
      </FacebookShareButton>
      <TwitterShareButton url={url} title={name}>
        <TwitterIcon {...iconOptions} />
      </TwitterShareButton>
      <WhatsappShareButton url={url} title={name}>
        <WhatsappIcon {...iconOptions} />
      </WhatsappShareButton>
      <TumblrShareButton url={url}>
        <TumblrIcon {...iconOptions} />
      </TumblrShareButton>
    </div>
  );
};

export default PlaylistShare;
