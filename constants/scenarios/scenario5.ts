import { Scenario } from '@/types/scenario';

export const scenario5: Scenario = {
  id: 5,
  title: '중요한 시험을 망쳤을 때',
  description: '중요한 시험에서 실패했어요. 이제 어떻게 대처할지 고민해볼까요?',
  chapters: [
    {
      id: 1,
      text: '중요한 시험에서 실패했어요. 어떻게 대처할까요?',
      choices: [
        {
          id: 1,
          text: '실패를 받아들이고 다시 계획을 세운다.',
          nextChapterId: 2,
          emotionalImpact: { stress: -10, happiness: 10, confidence: 15, anxiety: -5 },
          message: '실패를 경험 삼아 새로운 계획을 세웠어요. 앞으로 더 나은 전략과 준비로 도전해보세요!',
        },
        {
          id: 2,
          text: '친구나 가족에게 도움을 요청한다.',
          nextChapterId: 3,
          emotionalImpact: { stress: -5, happiness: 15, confidence: 10, anxiety: -5 },
          message: '친구와 가족의 도움 덕분에 기분이 풀리고 다시 도전할 힘을 얻었어요. 함께 하면 어려움도 극복할 수 있답니다.',
        },
        {
          id: 3,
          text: '포기하고 다른 길을 모색한다.',
          nextChapterId: 4,
          emotionalImpact: { stress: 15, happiness: -10, confidence: -15, anxiety: 10 },
          message: '시험을 포기하니 불안과 스트레스가 커졌어요. 다음에는 도전하는 용기를 내보는 건 어떨까요?',
        },
      ],
    },
    {
      id: 2,
      text: '새로운 계획을 세우고 다시 도전을 준비했어요. 다음에는 어떤 방법으로 공부할까요?',
      choices: [
        {
          id: 1,
          text: '공부 방법을 바꿔본다.',
          nextChapterId: 5,
          emotionalImpact: { stress: -10, happiness: 15, confidence: 20, anxiety: -5 },
          message: '공부 방법을 바꾼 덕분에 자신감을 회복했어요. 새로운 방식으로 도전하면 좋은 결과가 따를 거예요!',
        },
        {
          id: 2,
          text: '전문가의 도움을 받는다.',
          nextChapterId: 6,
          emotionalImpact: { stress: -5, happiness: 10, confidence: 15, anxiety: -5 },
          message: '전문가의 조언으로 새로운 전략을 배우며 준비가 순조롭게 진행되었어요. 꾸준한 준비가 성공의 열쇠랍니다.',
        },
      ],
    },
    {
      id: 3,
      text: '친구나 가족과 시간을 보내며 위로를 받았어요. 이후 어떤 선택을 하시겠어요?',
      choices: [
        {
          id: 1,
          text: '함께 스터디 그룹을 만든다.',
          nextChapterId: 5,
          emotionalImpact: { stress: -10, happiness: 15, confidence: 20, anxiety: -5 },
          message: '친구들과 스터디 그룹을 만들어 서로 격려하며 공부하게 되었어요. 협력은 큰 힘이 된답니다!',
        },
        {
          id: 2,
          text: '잠시 휴식을 취하고 재충전한다.',
          nextChapterId: 6,
          emotionalImpact: { stress: -15, happiness: 10, confidence: 10, anxiety: -10 },
          message: '휴식을 통해 스트레스를 해소하고 재충전했어요. 잠시 멈추는 것도 다음 도전을 위한 현명한 선택이에요.',
        },
      ],
    },
    {
      id: 4,
      text: '다른 길을 모색하기로 결정했어요. 이제 어떤 행동을 취할까요?',
      choices: [
        {
          id: 1,
          text: '진로 상담을 받아본다.',
          nextChapterId: 7,
          emotionalImpact: { stress: -5, happiness: 10, confidence: 15, anxiety: -5 },
          message: '진로 상담을 통해 새로운 기회를 찾으며 긍정적인 방향으로 나아갔어요. 새로운 길도 도전해볼 만하답니다.',
        },
        {
          id: 2,
          text: '바로 취업을 시도한다.',
          nextChapterId: 8,
          emotionalImpact: { stress: 15, happiness: -10, confidence: -10, anxiety: 15 },
          message: '즉각적인 취업 시도가 쉽지 않아 스트레스와 불안이 커졌어요. 조금 더 준비해서 다시 도전해보는 건 어떨까요?',
        },
      ],
    },
    {
      id: 5,
      text: '다시 도전해 성공했어요! 시험에 합격하는 기쁨을 맛보며 미래가 밝게 보입니다.',
      isEnding: true,
      choices: [],
    },
    {
      id: 6,
      text: '휴식을 통해 재충전하고, 새로운 도전을 위한 준비를 마쳤어요.',
      isEnding: true,
      choices: [],
    },
    {
      id: 7,
      text: '진로 상담 후, 새로운 방향으로 나아가며 긍정적인 미래를 맞이했어요.',
      isEnding: true,
      choices: [],
    },
    {
      id: 8,
      text: '즉각적인 취업 시도가 실패하며 스트레스와 좌절감이 커졌어요.',
      isEnding: true,
      choices: [],
    },
  ],
};
