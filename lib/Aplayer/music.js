<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script>const ap = new APlayer({
    container: document.getElementById('aplayer'),
	fixed: true,
    autoplay: false,
	theme: ‘#b7daff’
    audio: [
	{
        name: '永久に结ひて',      /*#歌名*/
        artist: '石橋優子',  /*#歌手*/
        url: 'https://m701.music.126.net/20210407123104/2f17b4032c409a05c51240e0a54321f1/jdyyaac/0759/5352/0f59/030a0ca1c7d8009d3c6d83ecfd3de8e4.m4a',    /*#mp3的url地址*/
        cover: 'cover.jpg' /*#歌的封面*/
    }
	]
});