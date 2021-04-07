const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: '歌曲的名字',
        artist: '歌手',
        url: '音乐文件的地址',
        cover: '封面图片的地址',
      }
    ]
});
