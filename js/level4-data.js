/* ============================================
   AI Tools Academy - Level 4: 動画AI・コーディングAI・検索AI
   ============================================ */

const LEVEL4_DATA = {
    id: 4,
    title: "動画AI・コーディングAI・検索AI",
    icon: "🎬",
    description: "Runway、Sora、GitHub Copilot、Claude Code、Cursor、Perplexity、NotebookLM",
    modules: [
        {
            id: 401,
            title: "動画生成AI（Runway・Sora）",
            duration: "15分",
            content: `
<h2>Runway</h2>
<table>
<thead>
<tr><th>項目</th><th>内容</th></tr>
</thead>
<tbody>
<tr><td>開発元</td><td>Runway ML</td></tr>
<tr><td>最新モデル</td><td>Gen-3 Alpha</td></tr>
<tr><td>入力</td><td>テキスト / 画像 / 動画</td></tr>
<tr><td>出力</td><td>最大16秒の動画クリップ、最大4K</td></tr>
</tbody>
</table>

<h3>Runway の強み</h3>
<ul>
<li><strong>高品質な動画生成</strong>：シネマティックな映像品質、物理法則に沿った動き</li>
<li><strong>多機能な動画編集</strong>：インペインティング、背景除去・差し替え、モーションブラシ</li>
<li><strong>画像から動画への変換</strong>：静止画にモーションを追加、カメラワーク指定</li>
<li><strong>プロフェッショナル向け</strong>：映画・CM制作での実績</li>
</ul>

<h2>Sora（OpenAI）</h2>
<table>
<thead>
<tr><th>項目</th><th>内容</th></tr>
</thead>
<tbody>
<tr><td>開発元</td><td>OpenAI</td></tr>
<tr><td>入力</td><td>テキスト / 画像</td></tr>
<tr><td>出力</td><td>最大60秒の動画、最大1080p</td></tr>
<tr><td>利用方法</td><td>ChatGPT Plus/Pro経由</td></tr>
</tbody>
</table>

<h3>Sora の強み</h3>
<ul>
<li><strong>長尺動画生成</strong>：最大60秒（業界最長クラス）で一貫したストーリー展開</li>
<li><strong>高い物理理解</strong>：リアルな物理シミュレーション、光の反射・影の精密な表現</li>
<li><strong>ChatGPTとの統合</strong>：対話形式で動画を指示</li>
<li><strong>スタイル指定</strong>：映画風、アニメ風など多彩なスタイル</li>
</ul>

<h2>動画生成AI比較</h2>
<table>
<thead>
<tr><th>比較項目</th><th>Runway</th><th>Sora</th><th>Pika</th><th>Kling</th></tr>
</thead>
<tbody>
<tr><td><strong>画質</strong></td><td>★5</td><td>★5</td><td>★4</td><td>★4</td></tr>
<tr><td><strong>動画長</strong></td><td>最大16秒</td><td>最大60秒</td><td>最大10秒</td><td>最大5分</td></tr>
<tr><td><strong>操作性</strong></td><td>★4</td><td>★5</td><td>★5</td><td>★4</td></tr>
<tr><td><strong>コスト</strong></td><td>★3</td><td>★3</td><td>★4</td><td>★4</td></tr>
<tr><td><strong>物理表現</strong></td><td>★5</td><td>★5</td><td>★3</td><td>★4</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q401_1", type: "choice", question: "Soraが生成できる動画の最大長さはどれくらいですか？", options: ["10秒", "16秒", "30秒", "60秒"], answer: 3, explanation: "Soraは最大60秒の動画を生成でき、業界最長クラスです。" },
                { id: "q401_2", type: "choice", question: "Runwayの動画編集機能に含まれないものはどれですか？", options: ["インペインティング", "背景除去", "AI作曲", "モーションブラシ"], answer: 2, explanation: "AI作曲はRunwayの機能ではなく、Suno等の音声AIの機能です。" },
                { id: "q401_3", type: "choice", question: "Soraの利用方法として正しいものはどれですか？", options: ["Discord経由", "ChatGPT Plus/Pro経由", "ローカル実行", "Webブラウザのみ"], answer: 1, explanation: "SoraはChatGPT Plus/Pro経由で利用します。" }
            ]
        },
        {
            id: 402,
            title: "コーディングAI（Copilot・Claude Code・Cursor）",
            duration: "20分",
            content: `
<h2>GitHub Copilot</h2>
<table>
<thead>
<tr><th>項目</th><th>内容</th></tr>
</thead>
<tbody>
<tr><td>開発元</td><td>GitHub（Microsoft）</td></tr>
<tr><td>ベースモデル</td><td>OpenAI Codex / GPT-4o</td></tr>
<tr><td>対応エディタ</td><td>VS Code、JetBrains、Neovim、Visual Studio</td></tr>
<tr><td>対応言語</td><td>ほぼ全てのプログラミング言語</td></tr>
</tbody>
</table>

<h3>GitHub Copilot の強み</h3>
<ul>
<li><strong>リアルタイムコード補完</strong>：タイピング中に次の行を予測、関数全体の自動生成</li>
<li><strong>幅広いエディタ対応</strong>：主要IDEとシームレスに連携</li>
<li><strong>Copilot Chat</strong>：IDE内でAIと対話、コード説明・リファクタリング支援</li>
<li><strong>GitHub連携</strong>：PR要約の自動生成、Issue分析・コードレビュー</li>
<li><strong>Copilot Workspace</strong>：Issueから直接コード生成、仕様から実装の自動化</li>
</ul>

<h2>Claude Code</h2>
<table>
<thead>
<tr><th>項目</th><th>内容</th></tr>
</thead>
<tbody>
<tr><td>開発元</td><td>Anthropic</td></tr>
<tr><td>ベースモデル</td><td>Claude Opus 4.6 / Sonnet 4.6</td></tr>
<tr><td>実行環境</td><td>ターミナル（CLI）</td></tr>
</tbody>
</table>

<h3>Claude Code の強み</h3>
<ul>
<li><strong>エージェント型開発支援</strong>：ファイル読み書き・コマンド実行を自律的に遂行</li>
<li><strong>大規模コードベース対応</strong>：プロジェクト全体の理解、ファイル間の依存関係を把握</li>
<li><strong>高い推論能力</strong>：複雑なバグの原因特定、アーキテクチャ設計の提案</li>
<li><strong>ターミナルネイティブ</strong>：git、テスト、ビルドの直接実行</li>
</ul>

<h2>Cursor</h2>
<table>
<thead>
<tr><th>項目</th><th>内容</th></tr>
</thead>
<tbody>
<tr><td>開発元</td><td>Cursor Inc.</td></tr>
<tr><td>ベース</td><td>VS Code フォーク</td></tr>
<tr><td>AIモデル</td><td>GPT-4o、Claude、独自モデル</td></tr>
</tbody>
</table>

<h3>Cursor の強み</h3>
<ul>
<li><strong>AI-ネイティブなエディタ</strong>：AIがエディタ体験の中心</li>
<li><strong>Composer機能</strong>：複数ファイルの同時編集、プロジェクト横断的な変更</li>
<li><strong>コードベース理解</strong>：@codebase でプロジェクト全体を参照</li>
<li><strong>複数モデル選択可能</strong>：GPT-4o、Claude等をタスクに応じて切替</li>
</ul>

<h2>コーディングAI比較</h2>
<table>
<thead>
<tr><th>比較項目</th><th>GitHub Copilot</th><th>Claude Code</th><th>Cursor</th></tr>
</thead>
<tbody>
<tr><td><strong>コード補完</strong></td><td>★5</td><td>★3</td><td>★5</td></tr>
<tr><td><strong>対話型支援</strong></td><td>★4</td><td>★5</td><td>★5</td></tr>
<tr><td><strong>自律実行</strong></td><td>★4</td><td>★5</td><td>★4</td></tr>
<tr><td><strong>大規模プロジェクト</strong></td><td>★4</td><td>★5</td><td>★4</td></tr>
<tr><td><strong>エディタ統合</strong></td><td>★5</td><td>★3(CLI)</td><td>★5</td></tr>
<tr><td><strong>学習曲線</strong></td><td>★5</td><td>★3</td><td>★4</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q402_1", type: "choice", question: "Claude Codeの実行環境はどれですか？", options: ["VS Code", "Webブラウザ", "ターミナル（CLI）", "JetBrains"], answer: 2, explanation: "Claude Codeはターミナル（CLI）で実行するエージェント型の開発支援ツールです。" },
                { id: "q402_2", type: "choice", question: "GitHub Copilotの無料プランで利用できる月間コード補完回数はどのくらいですか？", options: ["100回", "500回", "2000回", "無制限"], answer: 2, explanation: "GitHub Copilotの無料プランでは月2000回のコード補完と50回のチャットが利用できます。" },
                { id: "q402_3", type: "choice", question: "Cursorがベースとしているエディタはどれですか？", options: ["Vim", "Emacs", "VS Code", "Sublime Text"], answer: 2, explanation: "CursorはVS Codeをフォーク（分岐）して作られたAI-ネイティブなコードエディタです。" },
                { id: "q402_4", type: "fill", question: "複数ファイルの同時編集ができるCursorの機能名は？（英語で）", answer: "Composer", explanation: "CursorのComposer機能は複数ファイルの同時編集やプロジェクト横断的な変更が可能です。" }
            ]
        },
        {
            id: 403,
            title: "検索特化AI（Perplexity・NotebookLM）",
            duration: "15分",
            content: `
<h2>Perplexity</h2>
<table>
<thead>
<tr><th>項目</th><th>内容</th></tr>
</thead>
<tbody>
<tr><td>開発元</td><td>Perplexity AI</td></tr>
<tr><td>主な機能</td><td>AI検索エンジン</td></tr>
<tr><td>ベースモデル</td><td>GPT-4o、Claude、独自モデル</td></tr>
<tr><td>特徴</td><td>リアルタイムWeb検索+AI回答</td></tr>
</tbody>
</table>

<h3>Perplexity の強み</h3>
<ul>
<li><strong>ソース付きAI回答</strong>：全ての回答に参照元URL付き。情報の信頼性を確認可能</li>
<li><strong>リアルタイム検索</strong>：常に最新情報を取得。ニュース、論文、統計データ</li>
<li><strong>Pro Search</strong>：複雑な質問を段階的に分解し、複数ソースから包括的な回答</li>
<li><strong>フォーカス機能</strong>：学術論文、YouTube、Reddit等ソースを絞った検索</li>
<li><strong>Spaces</strong>：調査結果をチームで共有。プロジェクト別のリサーチ管理</li>
</ul>

<h3>Perplexity 料金プラン</h3>
<table>
<thead>
<tr><th>プラン</th><th>月額料金</th><th>主な機能</th></tr>
</thead>
<tbody>
<tr><td>Free</td><td>無料</td><td>基本検索、5回/日のPro Search</td></tr>
<tr><td>Pro</td><td>$20/月</td><td>無制限Pro Search、ファイルアップロード</td></tr>
<tr><td>Enterprise</td><td>要問合せ</td><td>SSO、チーム管理、API</td></tr>
</tbody>
</table>

<h2>NotebookLM（Google）</h2>
<table>
<thead>
<tr><th>項目</th><th>内容</th></tr>
</thead>
<tbody>
<tr><td>開発元</td><td>Google</td></tr>
<tr><td>主な機能</td><td>資料ベースAI分析</td></tr>
<tr><td>対応形式</td><td>PDF、Googleドキュメント、Web URL、テキスト、YouTube動画</td></tr>
<tr><td>特徴</td><td>アップロード資料のみを参照して回答</td></tr>
</tbody>
</table>

<h3>NotebookLM の強み</h3>
<ul>
<li><strong>資料ベースの正確な回答</strong>：ハルシネーションが極めて少ない。引用箇所を明示</li>
<li><strong>Audio Overview</strong>：資料をポッドキャスト形式に変換。二人の会話形式で内容を解説</li>
<li><strong>複数資料の横断分析</strong>：最大50ソースを同時分析。資料間の関連性を自動検出</li>
<li><strong>完全無料</strong>：Googleアカウントのみで利用可能</li>
</ul>

<h2>検索AI比較</h2>
<table>
<thead>
<tr><th>比較項目</th><th>Perplexity</th><th>NotebookLM</th></tr>
</thead>
<tbody>
<tr><td><strong>検索対象</strong></td><td>Web全体</td><td>アップロード資料のみ</td></tr>
<tr><td><strong>リアルタイム性</strong></td><td>★5</td><td>★2</td></tr>
<tr><td><strong>出典明示</strong></td><td>★5</td><td>★5</td></tr>
<tr><td><strong>ハルシネーション耐性</strong></td><td>★4</td><td>★5</td></tr>
<tr><td><strong>資料分析</strong></td><td>★3</td><td>★5</td></tr>
<tr><td><strong>音声出力</strong></td><td>★2</td><td>★5</td></tr>
<tr><td><strong>コスト</strong></td><td>★4</td><td>★5</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">💡 使い分け</div>
<strong>Perplexity</strong>は最新情報のリサーチ、市場調査、ファクトチェックに最適です。<strong>NotebookLM</strong>は社内ドキュメントの分析、会議資料の要約、研修資料のポッドキャスト化に最適です。
</div>
`,
            quiz: [
                { id: "q403_1", type: "choice", question: "Perplexityの最大の特徴はどれですか？", options: ["画像生成機能", "全ての回答にソース（参照元URL）が付く", "ローカル実行が可能", "音楽生成機能"], answer: 1, explanation: "Perplexityは全ての回答に参照元URLが付き、情報の信頼性を確認できることが最大の特徴です。" },
                { id: "q403_2", type: "choice", question: "NotebookLMの「Audio Overview」機能とは何ですか？", options: ["音楽を生成する機能", "資料をポッドキャスト形式の会話に変換する機能", "音声入力で質問する機能", "音声ファイルを文字起こしする機能"], answer: 1, explanation: "Audio Overviewは資料の内容を二人の会話形式のポッドキャストに変換する機能です。" },
                { id: "q403_3", type: "choice", question: "NotebookLMがハルシネーションに強い理由はどれですか？", options: ["最新のGPT-4oを使用しているから", "アップロードした資料のみを参照して回答するから", "Google検索と連携しているから", "有料プランを使用しているから"], answer: 1, explanation: "NotebookLMはアップロードした資料のみを参照して回答するため、ハルシネーションが極めて少なくなります。" }
            ]
        }
    ]
};
