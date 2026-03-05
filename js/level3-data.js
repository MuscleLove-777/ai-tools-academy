/* ============================================
   AI Tools Academy - Level 3: 画像生成AI・音声AI
   ============================================ */

const LEVEL3_DATA = {
    id: 3,
    title: "画像生成AI・音声AI",
    icon: "🎨",
    description: "Midjourney、Stable Diffusion、DALL-E 3、ElevenLabs、Sunoの特徴と活用",
    modules: [
        {
            id: 301,
            title: "Midjourney・DALL-E 3",
            duration: "20分",
            content: `
<h2>Midjourney</h2>
<table>
<thead>
<tr><th>項目</th><th>内容</th></tr>
</thead>
<tbody>
<tr><td>開発元</td><td>Midjourney Inc.</td></tr>
<tr><td>最新バージョン</td><td>v7</td></tr>
<tr><td>操作方法</td><td>Discord / Webアプリ</td></tr>
<tr><td>出力解像度</td><td>最大2048x2048以上</td></tr>
<tr><td>商用利用</td><td>有料プランで可能</td></tr>
</tbody>
</table>

<h3>Midjourney の強み</h3>
<ul>
<li><strong>圧倒的なアート品質</strong>：フォトリアリスティックな表現、芸術的なスタイル再現、独特の美しい色彩</li>
<li><strong>プロンプトの柔軟性</strong>：簡単な指示でも高品質出力、スタイルパラメータが豊富</li>
<li><strong>キャラクターリファレンス機能</strong>：一貫性のあるキャラクター表現が可能</li>
<li><strong>高速生成</strong>：数十秒で4枚の候補を生成</li>
</ul>

<h3>Midjourney 料金プラン</h3>
<table>
<thead>
<tr><th>プラン</th><th>月額料金</th><th>GPU時間/月</th></tr>
</thead>
<tbody>
<tr><td>Basic</td><td>$10/月</td><td>約3.3時間</td></tr>
<tr><td>Standard</td><td>$30/月</td><td>15時間</td></tr>
<tr><td>Pro</td><td>$60/月</td><td>30時間</td></tr>
<tr><td>Mega</td><td>$120/月</td><td>60時間</td></tr>
</tbody>
</table>

<h2>DALL-E 3（OpenAI）</h2>
<table>
<thead>
<tr><th>項目</th><th>内容</th></tr>
</thead>
<tbody>
<tr><td>開発元</td><td>OpenAI</td></tr>
<tr><td>利用方法</td><td>ChatGPT内統合 / API</td></tr>
<tr><td>特徴</td><td>テキスト理解力が高い</td></tr>
<tr><td>商用利用</td><td>可能</td></tr>
</tbody>
</table>

<h3>DALL-E 3 の強み</h3>
<ul>
<li><strong>自然言語理解の精度</strong>：長い説明文も正確に反映、文章中のテキスト描画が得意</li>
<li><strong>ChatGPTとの統合</strong>：会話の中で画像生成、プロンプト改善を自動提案</li>
<li><strong>安全性への配慮</strong>：著作権保護機能、有害コンテンツフィルター</li>
<li><strong>手軽さ</strong>：環境構築不要、初心者でもすぐに利用可能</li>
</ul>

<div class="info-box tip">
<div class="info-box-title">💡 使い分けのポイント</div>
<strong>Midjourney</strong>はアート品質を重視する場合（広告ビジュアル、コンセプトアート等）に最適です。<strong>DALL-E 3</strong>はChatGPTとの連携で手軽に使いたい場合や、テキスト描画が必要な場合に最適です。
</div>
`,
            quiz: [
                { id: "q301_1", type: "choice", question: "Midjourneyの操作方法として正しいものはどれですか？", options: ["Webブラウザのみ", "Discord / Webアプリ", "ターミナル（CLI）", "モバイルアプリのみ"], answer: 1, explanation: "MidjourneyはDiscordまたはWebアプリから操作します。" },
                { id: "q301_2", type: "choice", question: "画像内のテキスト描画が最も得意な画像生成AIはどれですか？", options: ["Midjourney", "Stable Diffusion", "DALL-E 3", "Adobe Firefly"], answer: 2, explanation: "DALL-E 3は自然言語理解の精度が高く、文章中のテキスト描画が特に得意です。" },
                { id: "q301_3", type: "choice", question: "Midjourneyの最安プランの月額料金はいくらですか？", options: ["無料", "$10/月", "$20/月", "$30/月"], answer: 1, explanation: "MidjourneyのBasicプランは$10/月です。無料プランはありません。" }
            ]
        },
        {
            id: 302,
            title: "Stable Diffusion・画像AI比較",
            duration: "15分",
            content: `
<h2>Stable Diffusion</h2>
<table>
<thead>
<tr><th>項目</th><th>内容</th></tr>
</thead>
<tbody>
<tr><td>開発元</td><td>Stability AI</td></tr>
<tr><td>最新モデル</td><td>SD3.5、SDXL</td></tr>
<tr><td>実行環境</td><td>ローカル / クラウド</td></tr>
<tr><td>ライセンス</td><td>オープンソース（一部モデル）</td></tr>
<tr><td>商用利用</td><td>可能（条件あり）</td></tr>
</tbody>
</table>

<h3>Stable Diffusion の強み</h3>
<ul>
<li><strong>ローカル実行可能</strong>：インターネット不要、データが外部に出ない、ランニングコスト実質ゼロ</li>
<li><strong>高いカスタマイズ性</strong>：LoRA、ControlNet等で精密な構図制御。自社製品のモデル学習も可能</li>
<li><strong>豊富なコミュニティモデル</strong>：CivitAI等で数千のモデルが公開</li>
<li><strong>自由度の高さ</strong>：コンテンツフィルターなし（ローカル実行時）</li>
</ul>

<h3>ローカル実行の推奨スペック</h3>
<table>
<thead>
<tr><th>コンポーネント</th><th>推奨スペック</th></tr>
</thead>
<tbody>
<tr><td>GPU</td><td>NVIDIA RTX 3060以上（VRAM 8GB+）</td></tr>
<tr><td>RAM</td><td>16GB以上</td></tr>
<tr><td>ストレージ</td><td>SSD 50GB以上</td></tr>
</tbody>
</table>

<h2>画像生成AI 総合比較</h2>
<table>
<thead>
<tr><th>比較項目</th><th>Midjourney</th><th>Stable Diffusion</th><th>DALL-E 3</th><th>Adobe Firefly</th></tr>
</thead>
<tbody>
<tr><td><strong>画質</strong></td><td>★5</td><td>★4</td><td>★4</td><td>★4</td></tr>
<tr><td><strong>操作性</strong></td><td>★4</td><td>★3</td><td>★5</td><td>★5</td></tr>
<tr><td><strong>カスタマイズ</strong></td><td>★3</td><td>★5</td><td>★2</td><td>★3</td></tr>
<tr><td><strong>テキスト描画</strong></td><td>★4</td><td>★3</td><td>★5</td><td>★4</td></tr>
<tr><td><strong>コスト</strong></td><td>★3</td><td>★5</td><td>★3</td><td>★3</td></tr>
<tr><td><strong>商用安全性</strong></td><td>★4</td><td>★3</td><td>★5</td><td>★5</td></tr>
<tr><td><strong>ローカル実行</strong></td><td>不可</td><td>可能</td><td>不可</td><td>不可</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">💡 選び方ガイド</div>
<ul>
<li><strong>アート品質最優先</strong> → Midjourney</li>
<li><strong>カスタマイズ・大量生成</strong> → Stable Diffusion</li>
<li><strong>手軽さ・テキスト描画</strong> → DALL-E 3</li>
<li><strong>商用利用の安全性</strong> → Adobe Firefly</li>
</ul>
</div>
`,
            quiz: [
                { id: "q302_1", type: "choice", question: "Stable Diffusionの最大の特徴はどれですか？", options: ["最高のアート品質", "ローカル実行が可能でカスタマイズ性が高い", "ChatGPTとの統合", "著作権保護機能"], answer: 1, explanation: "Stable Diffusionはローカル実行可能で、LoRAやControlNet等による高いカスタマイズ性が最大の特徴です。" },
                { id: "q302_2", type: "choice", question: "Stable Diffusionのローカル実行に推奨されるGPUのVRAMはどれくらいですか？", options: ["2GB以上", "4GB以上", "8GB以上", "24GB以上"], answer: 2, explanation: "NVIDIA RTX 3060以上（VRAM 8GB+）が推奨スペックです。" },
                { id: "q302_3", type: "choice", question: "商用利用の安全性が最も高いと評価されている画像生成AIはどれですか？", options: ["Midjourney", "Stable Diffusion", "DALL-E 3 / Adobe Firefly", "GAN"], answer: 2, explanation: "DALL-E 3とAdobe Fireflyは著作権保護機能やフィルターが充実しており、商用利用の安全性が最高水準です。" }
            ]
        },
        {
            id: 303,
            title: "音声AI（ElevenLabs・Suno）",
            duration: "15分",
            content: `
<h2>ElevenLabs ── 音声合成AI</h2>
<table>
<thead>
<tr><th>項目</th><th>内容</th></tr>
</thead>
<tbody>
<tr><td>開発元</td><td>ElevenLabs</td></tr>
<tr><td>主な機能</td><td>テキスト読み上げ（TTS）、音声クローン、吹替</td></tr>
<tr><td>対応言語</td><td>30言語以上（日本語対応）</td></tr>
<tr><td>音声品質</td><td>業界最高水準</td></tr>
</tbody>
</table>

<h3>ElevenLabs の強み</h3>
<ul>
<li><strong>超高品質な音声合成</strong>：人間と区別困難なレベル。感情表現・抑揚が自然</li>
<li><strong>音声クローニング</strong>：わずか数分の音声サンプルで声を複製</li>
<li><strong>多言語吹替</strong>：元の話者の声を保持したまま翻訳した音声を生成</li>
<li><strong>リアルタイム変換</strong>：ストリーミング対応で低遅延</li>
</ul>

<h3>ElevenLabs 料金プラン</h3>
<table>
<thead>
<tr><th>プラン</th><th>月額料金</th><th>文字数/月</th></tr>
</thead>
<tbody>
<tr><td>Free</td><td>無料</td><td>10,000文字</td></tr>
<tr><td>Starter</td><td>$5/月</td><td>30,000文字</td></tr>
<tr><td>Creator</td><td>$22/月</td><td>100,000文字</td></tr>
<tr><td>Pro</td><td>$99/月</td><td>500,000文字</td></tr>
<tr><td>Scale</td><td>$330/月</td><td>2,000,000文字</td></tr>
</tbody>
</table>

<h2>Suno ── AI作曲</h2>
<table>
<thead>
<tr><th>項目</th><th>内容</th></tr>
</thead>
<tbody>
<tr><td>開発元</td><td>Suno AI</td></tr>
<tr><td>主な機能</td><td>AI作曲・歌声生成</td></tr>
<tr><td>入力</td><td>テキスト（歌詞・ジャンル指定）</td></tr>
<tr><td>出力</td><td>フル楽曲（ボーカル+伴奏）</td></tr>
</tbody>
</table>

<h3>Suno の強み</h3>
<ul>
<li><strong>テキストから完全な楽曲を生成</strong>：歌詞+メロディ+伴奏+ボーカルが数分で完成</li>
<li><strong>多ジャンル対応</strong>：ポップ、ロック、ジャズ、J-POP風、演歌風なども可能</li>
<li><strong>高品質なボーカル</strong>：男声・女声の選択、感情表現のある歌唱</li>
<li><strong>日本語歌詞対応</strong>：日本語の歌詞で自然な歌唱</li>
</ul>

<h3>Suno 料金プラン</h3>
<table>
<thead>
<tr><th>プラン</th><th>月額料金</th><th>生成数/月</th><th>商用利用</th></tr>
</thead>
<tbody>
<tr><td>Free</td><td>無料</td><td>10曲/日</td><td>不可</td></tr>
<tr><td>Pro</td><td>$10/月</td><td>500曲/月</td><td>可能</td></tr>
<tr><td>Premier</td><td>$30/月</td><td>2000曲/月</td><td>可能</td></tr>
</tbody>
</table>

<h2>活用例</h2>
<table>
<thead>
<tr><th>ツール</th><th>活用例</th></tr>
</thead>
<tbody>
<tr><td>ElevenLabs</td><td>eラーニング教材のナレーション、ポッドキャスト制作、多言語ナレーション、ゲームキャラクターボイス</td></tr>
<tr><td>Suno</td><td>CM・広告用BGM制作、YouTube動画のBGM、企業テーマソング、プレゼン用音楽</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q303_1", type: "choice", question: "ElevenLabsの音声クローニングに必要な音声サンプルの長さはどのくらいですか？", options: ["数秒", "数分", "数時間", "数日分"], answer: 1, explanation: "ElevenLabsはわずか数分の音声サンプルで声のクローニングが可能です。" },
                { id: "q303_2", type: "choice", question: "Sunoが生成できるものはどれですか？", options: ["画像のみ", "音声読み上げのみ", "フル楽曲（ボーカル+伴奏）", "動画"], answer: 2, explanation: "Sunoはテキストからフル楽曲（ボーカル+伴奏）を生成できるAI作曲サービスです。" },
                { id: "q303_3", type: "choice", question: "ElevenLabsの無料プランで利用できる文字数は月あたりどのくらいですか？", options: ["1,000文字", "10,000文字", "100,000文字", "無制限"], answer: 1, explanation: "ElevenLabsの無料プランでは月10,000文字まで利用できます。" }
            ]
        }
    ]
};
