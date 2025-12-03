# 創発コミュニケーション(EmCom)
## 参考資料一覧
- 読んだ方が良い論文
    - [Multi-Agent Cooperation and the Emergence of (Natural) Language(2016)](https://arxiv.org/abs/1612.07182)
    - [Multi-agent Reinforcement Learning in Sequential Social Dilemmas(2017)](https://arxiv.org/abs/1702.03037)
    - [Capacity, Bandwidth, and Compositionality in Emergent Language Learning(2019)](https://arxiv.org/abs/1910.11424)
    - [Compositionality and Generalization in Emergent Languages(2020)](https://arxiv.org/abs/2004.09124)
    - [On the interaction between supervision and self-play in emergent communication(2020)](https://arxiv.org/abs/2002.01093)
    - [Emergent Multi-Agent Communication in the Deep Learning  Era(2020)](https://arxiv.org/abs/2006.02419)
    - [Emergent Communication of Generalizations(2021)](https://arxiv.org/abs/2106.02668)
    - [Emergent Communication: Generalization and Overfitting in Lewis Games(2022)](https://arxiv.org/abs/2209.15342)
    - [Emergent Communication at Scale(2022)](https://openreview.net/forum?id=AUGBfDIV9rL)
    - [On the Word Boundaries of Emergent Languages Based on Harris's Articulation Scheme(2023)](https://openreview.net/forum?id=b4t9_XASt6G)
    - [One-to-Many Communication and Compositionality  in Emergent Communication(2024)](https://openreview.net/forum?id=mfgcxMm5aa)
    - [Speaking Your Language: Spatial Relationships in Interpretable Emergent Communication(2024)](https://arxiv.org/abs/2406.07277)
    - [言語とコミュニケーションの創発に関する構成論的研究の展開(2024)](https://www.jstage.jst.go.jp/article/jcss/31/1/31_2023.073/_article/-char/ja/)

## 論文メモ
### 2021
#### Emergent Communication of Generalizations
従来のLewis形式の参照ゲームは、それから発生するコミュニケーションは対象となる単一のオブジェクトに特化した一意なメッセージの出現しか促さず、人間的な抽象概念を持つ言語の出現が促されることはなかった．それは、例えば対象オブジェクトがとある画像であったとすると、それに含まれる微細なノイズや擬似的なパターンにまでも適応(過学習)してしまうことや、複数の物体に跨って初めて意味を持つ概念(xorなど)を理解できないことが原因だとしている．そこで、setrefゲームとconceptゲームを提案する．
setrefゲームは教師が(単一の物体ではなく)とある概念に属する物体のグループを見て、それを生徒に伝達するタスク．ただし、教師と生徒は同じ入力を見る．
conceptゲームは、それに加えて教師と生徒が異なる入力を見る．
これらはLewis型のシグナルゲームを集合へと拡張したものと捉えることができる．
**後半の評価指標や数式への理解が足りないので、また読む**
### 2024
#### One-to-Many Communication and Compositionality  in Emergent Communication
多対一コミュニケーション環境における構成性の出現に着眼した論文．主張としては、リスナが「多」であることにより発生する環境的な圧力が、スピーカのメッセージの構成性を促進する．
環境的圧力1:リスナがそれぞれ異なるメッセージの特定の部分(特定の要素)にのみ関心を持つことで、スピーカに「メッセージの一部にしか関心が無いリスナに対してもより理解しやすい」ようにメッセージを構成するような圧力が働く
環境的圧力2:メッセージが複数のリスナに同時に処理されるという協調圧力によって、スピーカは「メッセージを誰が受け取っても分かるような形に」構成する?
