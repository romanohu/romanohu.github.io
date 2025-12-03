# マルチエージェント強化学習(MARL)
## 参考資料一覧
- 読んだ方が良い論文
    - [Planning Problems for Sophisticated Agents with Present Bias(2016)](https://arxiv.org/abs/1603.08177)
    - [Multi-agent Reinforcement Learning in Sequential Social Dilemmas(2017)](https://arxiv.org/abs/1702.03037)
    - [Multiagent cooperation and competition with deep reinforcement learning(2017)](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0172395)
    - [Maintaining cooperation in complex social dilemmas using deep reinforcement learning(2018)](https://arxiv.org/abs/1707.01068)
    - [Inequity aversion improves cooperation in intertemporal social dilemmas(2018)](https://arxiv.org/abs/1803.08884)
    - [A Review of Cooperative Multi-Agent Deep Reinforcement Learning(2019)](https://arxiv.org/abs/1908.03963)
    - [Agent Modeling as Auxiliary Task for Deep Reinforcement Learning(2019)](https://arxiv.org/abs/1907.09597)
    - [Emergent Multi-Agent Communication in the Deep Learning
Era(2020)](https://arxiv.org/abs/2006.02419)
    - [Promoting Coordination through Policy Regularization in Multi-Agent Deep Reinforcement Learning(2020)](https://arxiv.org/abs/1908.02269)
    - [Sample Factory: Egocentric 3D Control from Pixels at 100000 FPS with Asynchronous Reinforcement Learning(2020)](https://arxiv.org/abs/2006.11751)
    - [The Surprising Effectiveness of PPO in Cooperative, Multi-Agent Games(2021)](https://arxiv.org/abs/2103.01955?utm_source=chatgpt.com)
    - [Multi-agent deep reinforcement learning: a survey(2021)](https://link.springer.com/article/10.1007/s10462-021-09996-w?utm_source=chatgpt.com)
    - [Trust Region Policy Optimisation in Multi-Agent Reinforcement Learning(2022)](https://arxiv.org/abs/2109.11251?utm_source=chatgpt.com)
    - [RPM: Generalizable Behaviors for Multi-Agent Reinforcement Learning(2022)](https://arxiv.org/abs/2210.09646)
    - [Multi-Agent Reinforcement Learning is a Sequence Modeling Problem(2023)](https://arxiv.org/abs/2205.14953?utm_source=chatgpt.com)
    - [A Comprehensive Survey on Multi-Agent Cooperative Decision-Making: Scenarios, Approaches, Challenges and Perspectives(2025)](https://arxiv.org/abs/2503.13415)

## 論文メモ
### 2017
#### Multi-agent Reinforcement Learning in Sequential Social Dilemmas
従来のMGSDは1回の行動において"協力"か"裏切り"かの選択を迫る設定をしていたが、本論文ではその選択というのは短期的な行動選択ではなく、長期的な行動選択の方針(policy)として現れると主張している．それを県境するための枠組みとしてSequentialSocialDilemma(SSD)を提言する．これはMGSDの特徴を維持しつつも、時間的に拡張されたMarkovゲームとして定式化した社会ジレンマモデルである．SSDの特徴として協力の「度合い」も表現できる点がある．
また、MGSDの利得行列上では同質に見えたとしても、SSDとして見ると本質的に異なるゲームがあることが判明した．
記述的(Descriptive)な立場で、どのような行動パターンが現れるのかを観察．
それぞれのゲームの差異の他に、学習の際のハイパーパラメータにも着目している．
#### Multiagent cooperation and competition with deep reinforcement learning
Pongゲーム環境において、報酬設定pを操作することで、協力的/競争的な行動が創発する．また、固定方策AIを相手に学習するsingle-playerDQNよりも、固定方策AIを用いないmultiplayerDQNのほうが、より一般的でロバストな戦略が育つ．
### 2018
#### Maintaining cooperation in complex social dilemmas using deep reinforcement learning
深層強化学習を用いてTFT(しっぺ返し戦略)みたいに協力できるエージェントを作るにはどうしたら良いかという問題に挑戦し、拡張版のamTFTを提起している．マルチエージェントではなく単一エージェントの設計を狙っている．
#### Inequity aversion improves cooperation in intertemporal social dilemmas
### 2019
#### A Review of Cooperative Multi-Agent Deep Reinforcement Learning

### 2020
#### Promoting Coordination through Policy Regularization in Multi-Agent Deep Reinforcement Learning
### 2021
#### Multi-agent deep reinforcement learning: a survey
MARL及びMADRLに関する包括的なサーベイ．メルポは、ゲーム設定が混合設定(一般和ゲーム)で、エージェントは独立学習者で、環境はPOMGな実験ということか．p11の分散訓練分散実行(DTDE)の詳細がかなり分かりやすい．Leibo(2017)も出てきているので、他の登場した文献も読んでおきたい．
### 2025
#### A Comprehensive Survey on Multi-Agent Cooperative Decision-Making: Scenarios, Approaches, Challenges and Perspectives
