import { Scenario } from '@/types/scenario';

export const scenario3: Scenario = {
  id: 3,
  title: '친구의 비밀을 알게 되었을 때',
  description: '친구가 몰래 위험한 행동을 하고 있는 걸 알게 됐어요. 어떻게 할까요?',
  chapters: [
    {
      id: 1,
      text: '친구가 몰래 위험한 행동을 하고 있는 걸 알게 됐어요. 어떻게 할까요?',
      choices: [
        {
          id: 1,
          text: '친구와 직접 대화해 상황을 물어본다.',
          nextChapterId: 2,
          emotionalImpact: { stress: -10, happiness: 5, confidence: 10, anxiety: -5 },
          message: '친구와 솔직하게 대화를 나누며 상황을 파악했어요. 앞으로도 서로의 마음을 열고 이야기하면 더욱 건강한 관계로 발전할 수 있을 거예요.',
        },
        {
          id: 2,
          text: '가족이나 가까운 사람에게 알려본다.',
          nextChapterId: 3,
          emotionalImpact: { stress: 5, happiness: -5, confidence: 0, anxiety: 10 },
          message: '친구의 가족에게 알리면서 친구에게 사실이 전달되었어요. 이런 방법은 신뢰에 금이 갈 수 있으니, 다음에는 먼저 친구와 직접 이야기해보세요.',
        },
        {
          id: 3,
          text: '아무 말도 하지 않고 상황을 지켜본다.',
          nextChapterId: 4,
          emotionalImpact: { stress: 15, happiness: -10, confidence: -5, anxiety: 15 },
          message: '아무런 조치를 취하지 않자 친구의 상황이 점점 나빠졌어요. 문제를 인지하면 바로 도움을 청하는 게 중요해요.',
        },
      ],
    },
    {
      id: 2,
      text: '친구가 문제를 인정하고 도움을 요청해요. 어떻게 할까요?',
      choices: [
        {
          id: 1,
          text: '전문가의 도움을 받도록 권유한다.',
          nextChapterId: 5,
          emotionalImpact: { stress: -5, happiness: 15, confidence: 10, anxiety: -5 },
          message: '친구가 전문가의 도움을 받아 상황이 개선되었어요. 앞으로도 외부의 조언을 듣는 것이 좋을 것 같아요.',
        },
        {
          id: 2,
          text: '친구를 직접 도와주기로 한다.',
          nextChapterId: 6,
          emotionalImpact: { stress: 10, happiness: -5, confidence: -10, anxiety: 10 },
          message: '친구를 직접 도왔지만 상황은 크게 나아지지 않았어요. 다음에는 전문적인 도움과 함께 협력하는 방법도 고려해보세요.',
        },
      ],
    },
    {
      id: 3,
      text: '친구가 당신에게 화를 내기 시작했어요. 어떻게 할까요?',
      choices: [
        {
          id: 1,
          text: '친구에게 진심으로 사과하며 이해를 구한다.',
          nextChapterId: 5,
          emotionalImpact: { stress: -5, happiness: 10, confidence: 5, anxiety: -3 },
          message: '진심 어린 사과로 친구와의 관계가 회복되었어요. 앞으로는 서로의 감정을 더 배려하며 대화해보세요.',
        },
        {
          id: 2,
          text: '친구의 안전을 위해 꼭 필요한 조치라고 설명한다.',
          nextChapterId: 6,
          emotionalImpact: { stress: 5, happiness: -5, confidence: -5, anxiety: 10 },
          message: '친구에게 안전을 위한 조치임을 설명했지만, 오히려 상처받았어요. 다음에는 상대방의 감정을 먼저 고려하는 대화를 시도해보세요.',
        },
      ],
    },
    {
      id: 4,
      text: '친구의 상황이 더 악화되었어요. 어떻게 할까요?',
      choices: [
        {
          id: 1,
          text: '지금이라도 도움을 청한다.',
          nextChapterId: 5,
          emotionalImpact: { stress: -5, happiness: 5, confidence: 5, anxiety: -5 },
          message: '마지막 순간에 도움을 요청해 상황을 개선할 수 있었어요. 늦더라도 행동이 변화를 만들 수 있답니다.',
        },
        {
          id: 2,
          text: '여전히 아무 말도 하지 않는다.',
          nextChapterId: 6,
          emotionalImpact: { stress: 20, happiness: -10, confidence: -15, anxiety: 20 },
          message: '아무런 조치를 취하지 않자 상황은 더욱 악화되었어요. 앞으로는 문제를 인지하면 바로 대응해보세요.',
        },
      ],
    },
    {
      id: 5,
      text: '친구와의 관계가 회복되고, 문제가 해결되었어요.',
      isEnding: true,
      choices: [],
    },
    {
      id: 6,
      text: '관계가 회복되지 않고, 상황이 더 나빠졌어요.',
      isEnding: true,
      choices: [],
    },
  ],
};
