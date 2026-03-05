/* ============================================
   AI Tools Academy - Level 6: ビジネス活用・選定・導入
   ============================================ */

const LEVEL6_DATA = {
    id: 6,
    title: "ビジネス活用・選定・導入",
    icon: "🏢",
    description: "部門別活用例、AI選定フローチャート、企業導入ロードマップ",
    modules: [
        {
            id: 601,
            title: "部門別AI活用マップ",
            duration: "20分",
            content: `
<h2>部門別AI活用マップ</h2>
<p>各部門に最適なAIツールを組み合わせることで、業務効率を飛躍的に向上させることができます。</p>

<table>
<thead>
<tr><th>部門</th><th>業務</th><th>推奨AI</th></tr>
</thead>
<tbody>
<tr><td rowspan="2"><strong>マーケティング</strong></td><td>コンテンツ制作</td><td>ChatGPT/Claude + Midjourney</td></tr>
<tr><td>市場分析</td><td>Perplexity + ChatGPT</td></tr>
<tr><td rowspan="2"><strong>営業</strong></td><td>提案書・資料作成</td><td>Claude/ChatGPT + Copilot(PowerPoint)</td></tr>
<tr><td>顧客分析</td><td>ChatGPT/Gemini + Perplexity</td></tr>
<tr><td rowspan="2"><strong>経理・財務</strong></td><td>データ分析</td><td>ChatGPT/Copilot(Excel) + Gemini</td></tr>
<tr><td>レポート作成</td><td>Claude/ChatGPT + Copilot(Word)</td></tr>
<tr><td rowspan="2"><strong>開発</strong></td><td>コーディング</td><td>Copilot/Cursor + Claude Code</td></tr>
<tr><td>ドキュメント</td><td>Claude/ChatGPT + NotebookLM</td></tr>
<tr><td rowspan="2"><strong>人事・総務</strong></td><td>採用・研修</td><td>ChatGPT/Claude + NotebookLM</td></tr>
<tr><td>社内文書</td><td>Copilot(Word) + Claude</td></tr>
<tr><td rowspan="2"><strong>広報・PR</strong></td><td>プレスリリース</td><td>Claude/ChatGPT</td></tr>
<tr><td>ビジュアル制作</td><td>Midjourney/DALL-E + Runway</td></tr>
</tbody>
</table>

<h2>マーケティング活用フロー例</h2>
<ol>
<li><strong>Step 1 市場調査</strong>（Perplexity）：市場トレンドと競合分析</li>
<li><strong>Step 2 ターゲット分析</strong>（ChatGPT）：ペルソナを3パターン作成</li>
<li><strong>Step 3 コンセプト開発</strong>（Claude）：キャッチコピーと訴求ポイント</li>
<li><strong>Step 4 ビジュアル制作</strong>（Midjourney）：イメージビジュアルを5パターン</li>
<li><strong>Step 5 広告文作成</strong>（ChatGPT）：Google広告、SNS広告のコピー</li>
<li><strong>Step 6 動画CM制作</strong>（Runway + Suno）：プロモーション動画 + BGM</li>
</ol>

<h2>業種別おすすめAI組み合わせ</h2>
<table>
<thead>
<tr><th>業種</th><th>必須AI</th><th>推奨AI</th></tr>
</thead>
<tbody>
<tr><td>IT・テック企業</td><td>GitHub Copilot + Claude(Code)</td><td>Perplexity + ChatGPT</td></tr>
<tr><td>広告・メディア</td><td>ChatGPT + Midjourney + Runway</td><td>Claude + Suno + ElevenLabs</td></tr>
<tr><td>コンサルティング</td><td>Claude + Perplexity</td><td>ChatGPT + Copilot(M365)</td></tr>
<tr><td>法律事務所</td><td>Claude + NotebookLM</td><td>Perplexity</td></tr>
<tr><td>教育機関</td><td>NotebookLM + Gemini</td><td>Claude + ElevenLabs</td></tr>
<tr><td>医療・ヘルスケア</td><td>Claude + NotebookLM</td><td>Perplexity + Gemini</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
「1つのAIで全てを解決する」のではなく、各AIの強みを理解して組み合わせることが重要です。リサーチはPerplexity、文章はClaude、データ分析はChatGPT、資料化はCopilotといったように、業務フローの各段階で最適なAIを選びましょう。
</div>
`,
            quiz: [
                { id: "q601_1", type: "choice", question: "法律事務所に必須とされるAIの組み合わせはどれですか？", options: ["ChatGPT + Midjourney", "Claude + NotebookLM", "GitHub Copilot + Cursor", "Suno + Runway"], answer: 1, explanation: "法律事務所では長文分析が得意なClaudeと、資料ベースで正確な回答ができるNotebookLMの組み合わせが最適です。" },
                { id: "q601_2", type: "choice", question: "マーケティング活用フローで「市場調査」に最適なAIはどれですか？", options: ["Midjourney", "Suno", "Perplexity", "Runway"], answer: 2, explanation: "Perplexityはリアルタイムの市場データをソース付きで提供できるため、市場調査に最適です。" },
                { id: "q601_3", type: "choice", question: "AI活用で最も重要な考え方はどれですか？", options: ["1つのAIで全てを解決する", "最も高額なAIだけを使う", "各AIの強みを理解して組み合わせる", "AIを使わない"], answer: 2, explanation: "各AIの強みを理解して業務フローの各段階で最適なAIを選び、組み合わせることが最も重要です。" }
            ]
        },
        {
            id: 602,
            title: "AI選定フローチャート",
            duration: "15分",
            content: `
<h2>用途別AIおすすめ診断</h2>
<p>何をしたいかに応じて、最適なAIサービスを選びましょう。</p>

<h3>テキスト関連</h3>
<table>
<thead>
<tr><th>やりたいこと</th><th>おすすめAI</th><th>理由</th></tr>
</thead>
<tbody>
<tr><td>文章作成・編集</td><td>Claude（品質重視） / ChatGPT（汎用性重視）</td><td>Claudeは日本語品質最高、ChatGPTはエコシステム充実</td></tr>
<tr><td>プログラミング</td><td>GitHub Copilot / Claude Code / Cursor</td><td>補完ならCopilot、自律実行ならClaude Code、エディタ統合ならCursor</td></tr>
<tr><td>翻訳</td><td>ChatGPT / Gemini / Claude</td><td>いずれも高品質な多言語翻訳に対応</td></tr>
<tr><td>データ分析</td><td>ChatGPT / Copilot(Excel)</td><td>ChatGPTのAdvanced Analysis、ExcelのCopilot</td></tr>
<tr><td>リサーチ</td><td>Perplexity（Web検索） / NotebookLM（資料分析）</td><td>最新情報ならPerplexity、既存資料ならNotebookLM</td></tr>
</tbody>
</table>

<h3>クリエイティブ関連</h3>
<table>
<thead>
<tr><th>やりたいこと</th><th>おすすめAI</th><th>理由</th></tr>
</thead>
<tbody>
<tr><td>アート・デザイン</td><td>Midjourney</td><td>圧倒的なアート品質</td></tr>
<tr><td>手軽に画像生成</td><td>DALL-E 3（ChatGPT内）</td><td>環境構築不要、テキスト描画が得意</td></tr>
<tr><td>大量画像・カスタム</td><td>Stable Diffusion</td><td>ローカル実行、無料、カスタマイズ自由</td></tr>
<tr><td>ナレーション・読み上げ</td><td>ElevenLabs</td><td>業界最高品質の音声合成</td></tr>
<tr><td>音楽・BGM生成</td><td>Suno</td><td>テキストからフル楽曲を生成</td></tr>
<tr><td>動画クリップ</td><td>Runway / Sora</td><td>短尺ならRunway、長尺ならSora</td></tr>
</tbody>
</table>

<h3>ビジネス全般</h3>
<table>
<thead>
<tr><th>やりたいこと</th><th>おすすめAI</th><th>理由</th></tr>
</thead>
<tbody>
<tr><td>Office作業効率化</td><td>Copilot for Microsoft 365</td><td>Word・Excel・PowerPoint・Teams完全統合</td></tr>
<tr><td>チーム利用</td><td>ChatGPT Team / Claude Team</td><td>チーム管理と高セキュリティ</td></tr>
<tr><td>コスト重視</td><td>DeepSeek / Gemini無料版</td><td>無料または超低コストで利用可能</td></tr>
<tr><td>セキュリティ重視</td><td>Claude Enterprise / Llama（ローカル）</td><td>データ外部不送信、エンタープライズセキュリティ</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">⚠️ 選定時の注意</div>
AIサービスの機能・料金は頻繁に更新されます。本資料の情報は2026年3月時点のものですので、最新情報は各サービスの公式サイトで確認してください。
</div>
`,
            quiz: [
                { id: "q602_1", type: "choice", question: "セキュリティを最も重視する場合のAI選択として適切なのはどれですか？", options: ["ChatGPT Free", "DeepSeek", "Claude Enterprise / Llama（ローカル）", "Perplexity Free"], answer: 2, explanation: "Claude Enterpriseはエンタープライズセキュリティ、Llamaはローカル実行でデータ外部不送信が可能です。" },
                { id: "q602_2", type: "choice", question: "最新の市場情報をリサーチしたい場合、最適なAIはどれですか？", options: ["NotebookLM", "Perplexity", "Stable Diffusion", "Suno"], answer: 1, explanation: "Perplexityはリアルタイムでのウェブ検索が可能で、最新の市場情報リサーチに最適です。" },
                { id: "q602_3", type: "choice", question: "コスト重視の場合に無料で始められるAIの組み合わせとして正しいのはどれですか？", options: ["ChatGPT Plus + Midjourney", "Gemini無料版 + NotebookLM + Perplexity無料版", "Claude Pro + Cursor Pro", "Sora + ElevenLabs Pro"], answer: 1, explanation: "Gemini無料版、NotebookLM、Perplexity無料版はすべて無料で利用できる強力な組み合わせです。" }
            ]
        },
        {
            id: 603,
            title: "企業AI導入ロードマップ",
            duration: "20分",
            content: `
<h2>企業AI導入の5ステップ</h2>
<table>
<thead>
<tr><th>Phase</th><th>期間</th><th>内容</th><th>やること</th></tr>
</thead>
<tbody>
<tr><td><strong>Phase 1: 調査・検証</strong></td><td>1〜2ヶ月</td><td>社内課題の洗い出し</td><td>主要AIの無料トライアル、セキュリティ確認、パイロットチーム選定（3〜5名）</td></tr>
<tr><td><strong>Phase 2: パイロット導入</strong></td><td>2〜3ヶ月</td><td>1〜2部門での試験運用</td><td>ChatGPT Plus or Claude Proの導入、利用ガイドライン策定、効果測定基準の設定</td></tr>
<tr><td><strong>Phase 3: 部門展開</strong></td><td>3〜6ヶ月</td><td>パイロット結果に基づく拡大</td><td>Team/Businessプランへ移行、部門別ユースケース整理、社内勉強会の実施</td></tr>
<tr><td><strong>Phase 4: 全社展開</strong></td><td>6〜12ヶ月</td><td>全社的なAI活用</td><td>Enterprise版の導入検討、AIチャンピオン制度確立、業務プロセスの再設計</td></tr>
<tr><td><strong>Phase 5: 高度活用</strong></td><td>12ヶ月〜</td><td>AI活用の高度化</td><td>API連携による自動化、自社専用AIモデル（Llama等）の検討、ROI測定・改善</td></tr>
</tbody>
</table>

<h2>AI利用ガイドライン（テンプレート）</h2>

<h3>入力してはいけない情報</h3>
<ul>
<li>個人情報（氏名、住所、電話番号、マイナンバー等）</li>
<li>顧客の機密情報（非公開の売上データ等）</li>
<li>社内の未公開情報（未発表の製品情報等）</li>
<li>パスワード、APIキー等の認証情報</li>
<li>医療・法律に関する最終判断を求める質問</li>
</ul>

<h3>必ず行うこと</h3>
<ul>
<li>AI出力は必ず人間がレビュー・確認</li>
<li>事実関係は別ソースで裏取り</li>
<li>著作権に配慮（そのまま転用しない）</li>
<li>利用ログを記録（活用事例の共有用）</li>
</ul>

<h2>よくあるAI導入の失敗パターンと対策</h2>
<table>
<thead>
<tr><th>失敗パターン</th><th>原因</th><th>対策</th></tr>
</thead>
<tbody>
<tr><td>使われない</td><td>トップダウンで導入、現場ニーズ不一致</td><td>現場のペインポイントから出発する</td></tr>
<tr><td>品質問題</td><td>AI出力をそのまま利用</td><td>必ず人間がレビューする体制構築</td></tr>
<tr><td>セキュリティ事故</td><td>機密情報の入力</td><td>ガイドライン整備+Enterprise版利用</td></tr>
<tr><td>コスト超過</td><td>効果測定なしの全社導入</td><td>パイロットから段階的に拡大</td></tr>
<tr><td>属人化</td><td>特定の人しか使えない</td><td>研修+プロンプトテンプレート共有</td></tr>
<tr><td>陳腐化</td><td>導入時の知識で固定</td><td>定期的な最新情報キャッチアップ</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">💡 導入成功の鍵</div>
AI導入の成功の鍵は「小さく始めて大きく育てる」ことです。まず3〜5名のパイロットチームで効果を実証し、成功事例を社内に共有しながら段階的に拡大していきましょう。トップダウンではなく、現場のペインポイントから出発することが重要です。
</div>
`,
            quiz: [
                { id: "q603_1", type: "choice", question: "企業AI導入で最初に行うべきPhaseは何ですか？", options: ["全社展開", "調査・検証", "高度活用", "パイロット導入"], answer: 1, explanation: "Phase 1「調査・検証」で社内課題の洗い出しと無料トライアルから始めます。" },
                { id: "q603_2", type: "choice", question: "AI導入の失敗パターンで最も多い原因はどれですか？", options: ["AIの性能不足", "トップダウンで導入し現場ニーズと不一致", "AIサービスの料金が高い", "インターネット接続の問題"], answer: 1, explanation: "現場のニーズを無視したトップダウン導入が最も多い失敗パターンです。現場のペインポイントから出発することが重要です。" },
                { id: "q603_3", type: "choice", question: "AI利用ガイドラインで「入力してはいけない情報」に該当しないものはどれですか？", options: ["顧客の個人情報", "パスワード", "一般的な業界知識の質問", "未公開の製品情報"], answer: 2, explanation: "一般的な業界知識の質問はAIに入力しても問題ありません。個人情報や機密情報が禁止対象です。" },
                { id: "q603_4", type: "fill", question: "AI導入の成功の鍵を一言で表すと？（漢字を含む12文字以内）", answer: "小さく始めて大きく育てる", explanation: "まず少人数のパイロットで効果を実証し、段階的に拡大していくのが成功の鍵です。" }
            ]
        }
    ]
};
