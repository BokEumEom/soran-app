import { Scenario } from '@/types/scenario';

export const scenario12: Scenario = {
  id: 12,
  title: '친구와의 관계 회복',
  description: '오해로 인해 친구와 멀어진 상황에서, 어떻게 관계를 회복할지 함께 고민해봐요.',
  chapters: [
    {
      id: 1,
      text: '친구와 오해가 생겨 관계가 멀어졌어요. 어떻게 할까요?',
      choices: [
        {
          id: 1,
          text: '친구에게 연락해서 오해를 풀기 위해 진솔하게 대화한다.',
          nextChapterId: 2,
          emotionalImpact: { stress: -10, confidence: 10, happiness: 15, anxiety: -5 },
          message: '진솔한 대화를 통해 친구가 당신의 진심을 이해하며 오해가 서서히 풀리기 시작했어요.',
        },
        {
          id: 2,
          text: '시간을 두고 친구와의 거리를 유지한다.',
          nextChapterId: 3,
          emotionalImpact: { stress: 5, confidence: -5, happiness: -5, anxiety: 5 },
          message: '시간을 두었지만, 어색함이 계속 남아 큰 변화는 이루어지지 않았어요.',
        },
        {
          id: 3,
          text: '공통 친구에게 중재를 부탁한다.',
          nextChapterId: 4,
          emotionalImpact: { stress: -5, confidence: 5, happiness: 10, anxiety: -5 },
          message: '공통 친구의 도움으로 대화의 물꼬가 트이기 시작해, 갈등 해결의 실마리가 보였어요.',
        },
      ],
    },
    {
      id: 2,
      text: '친구가 대화에 응하며 관계 회복의 의지를 보여줬어요. 다음에는 어떻게 할까요?',
      choices: [
        {
          id: 1,
          text: '진심으로 사과하고 오해를 풀기 위한 대화를 계속 이어간다.',
          nextChapterId: 5,
          emotionalImpact: { stress: -10, confidence: 15, happiness: 20, anxiety: -5 },
          message: '진심 어린 사과와 꾸준한 대화로 서로의 마음이 열리며, 관계가 점점 회복되고 있어요.',
        },
        {
          id: 2,
          text: '대화를 잠시 멈추고 다시 한 번 시간을 가진다.',
          nextChapterId: 6,
          emotionalImpact: { stress: 5, confidence: -5, happiness: -10, anxiety: 5 },
          message: '시간이 지나도 어색함이 남아, 관계 회복에 큰 진전은 없었어요.',
        },
      ],
    },
    {
      id: 3,
      text: '친구와 거리를 유지하는 동안 갈등이 계속되고 있어요.',
      choices: [
        {
          id: 1,
          text: '결국 먼저 연락해서 대화를 시도한다.',
          nextChapterId: 5,
          emotionalImpact: { stress: -5, confidence: 10, happiness: 15, anxiety: -5 },
          message: '먼저 연락하자 친구도 마음을 열고 대화가 이어지며, 오해가 풀리기 시작했어요.',
        },
        {
          id: 2,
          text: '아무런 행동도 하지 않고 기다린다.',
          nextChapterId: 6,
          emotionalImpact: { stress: 10, confidence: -10, happiness: -10, anxiety: 10 },
          message: '아무런 행동을 하지 않자 관계는 점점 더 소원해졌어요.',
        },
      ],
    },
    {
      id: 4,
      text: '공통 친구의 중재로 인해 친구와의 대화가 시작되었어요.',
      choices: [
        {
          id: 1,
          text: '대화를 통해 서로의 감정을 이해하고 진심으로 사과한다.',
          nextChapterId: 5,
          emotionalImpact: { stress: -10, confidence: 10, happiness: 20, anxiety: -5 },
          message: '서로의 감정을 솔직하게 나누며 오해가 풀리고, 관계가 회복되기 시작했어요.',
        },
        {
          id: 2,
          text: '대화를 멈추고 관계 유지를 포기한다.',
          nextChapterId: 6,
          emotionalImpact: { stress: 5, confidence: -10, happiness: -10, anxiety: 5 },
          message: '대화를 중단하자 오해는 남아, 관계는 점점 멀어졌어요.',
        },
      ],
    },
    {
      id: 5,
      text: '친구와의 관계가 회복되었어요. 오해가 풀리고 서로를 더 깊이 이해하게 되었답니다.',
      isEnding: true,
      choices: [],
    },
    {
      id: 6,
      text: '친구와의 관계는 여전히 회복되지 않고, 갈등이 해결되지 않아 멀어졌어요.',
      isEnding: true,
      choices: [],
    },
  ],
};
