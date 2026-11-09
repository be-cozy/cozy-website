# cozy-website

株式会社Cozy のコーポレートサイト（https://www.be-cozy.jp）。

- `index.html` 1枚で完結。ビルドの仕組みはなく、ブラウザで直接開けば確認できる
- `main` に push すると Vercel が自動で公開する
- 子供くつNavi のキャラクターは kodomokutsu.com から、DIGGY のラックの服は diggy.jp の商品一覧から、ページを開いたときに読み込む。どちらも読めなければ、その部分だけ表示しない
- ヒーローの2つの画面（`assets/hero/`）は画像なので、各サイトの見た目が変わったら `tools/capture-hero.cjs` で撮り直す
