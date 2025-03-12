import { Scenario } from '@/types/scenario';

export const scenario7: Scenario = {
  id: 7,
  title: '중대한 실수를 저질렀을 때',
  description: '업무에서 큰 실수를 해버렸어요. 이제 이 상황을 어떻게 극복할지 한 번 고민해볼까요?',
  chapters: [
    {
      id: 1,
      text: '업무에서 큰 실수를 해버렸어요. 이제 어떻게 할까요?',
      choices: [
        {
          id: 1,
          text: '바로 상사에게 상황을 알리고 해결책을 찾아본다.',
          nextChapterId: 2,
          emotionalImpact: { stress: -10, happiness: 5, confidence: 10, anxiety: -5 },
          message:
            '바로 상사에게 상황을 알리고 함께 해결책을 고민했더니, 스트레스가 줄어들고 자신감도 회복되었어요. 어려운 상황은 솔직하게 공유하는 것이 앞으로 도움이 될 거예요.',
        },
        {
          id: 2,
          text: '혼자서 문제를 해결하려고 한다.',
          nextChapterId: 3,
          emotionalImpact: { stress: 10, happiness: -5, confidence: -10, anxiety: 15 },
          message:
            '혼자서 해결하려고 했지만 상황이 오히려 악화되었어요. 때로는 주변의 도움을 받는 것도 좋은 선택이라는 점을 기억해보세요.',
        },
        {
          id: 3,
          text: '실수를 감추고 그냥 넘긴다.',
          nextChapterId: 4,
          emotionalImpact: { stress: 20, happiness: -10, confidence: -15, anxiety: 20 },
          message:
            '실수를 감추고 넘기려고 했지만 결국 문제가 커져서 책임이 돌아왔어요. 미리 솔직하게 이야기하는 것이 더 나은 결과를 가져올 수 있답니다.',
        },
      ],
    },
    {
      id: 2,
      text: '상사가 상황을 이해해주며 함께 해결책을 고민해줬어요. 이제 어떻게 할까요?',
      choices: [
        {
          id: 1,
          text: '팀원들과 함께 힘을 합쳐 문제를 해결한다.',
          nextChapterId: 5,
          emotionalImpact: { stress: -10, happiness: 10, confidence: 15, anxiety: -5 },
          message:
            '팀원들과 함께 협력하여 문제를 해결하니, 자신감이 크게 회복되었어요. 앞으로도 서로 도우며 나아가면 좋은 결과가 따를 거예요.',
        },
        {
          id: 2,
          text: '앞으로 같은 실수를 반복하지 않도록 계획을 세운다.',
          nextChapterId: 6,
          emotionalImpact: { stress: -5, happiness: 5, confidence: 15, anxiety: -5 },
          message:
            '실수를 방지하기 위한 체계적인 계획을 세웠어요. 이러한 준비는 자신감을 높이고 앞으로의 발전에 큰 도움이 될 거예요.',
        },
      ],
    },
    {
      id: 3,
      text: '문제를 제때 해결하지 못해 상황이 더 어려워졌어요. 이제 어떻게 할까요?',
      choices: [
        {
          id: 1,
          text: '늦었지만 상사에게 상황을 알린다.',
          nextChapterId: 7,
          emotionalImpact: { stress: 10, happiness: -5, confidence: -10, anxiety: 15 },
          message:
            '늦게나마 상사에게 상황을 알렸지만, 이미 문제가 많이 커져버렸어요. 초기부터 솔직하게 소통하는 것이 중요하다는 교훈을 얻었답니다.',
        },
        {
          id: 2,
          text: '계속 혼자서 해결하려고 한다.',
          nextChapterId: 8,
          emotionalImpact: { stress: 20, happiness: -15, confidence: -20, anxiety: 20 },
          message:
            '혼자 해결하려는 시도가 실패해 상황이 더 악화되었어요. 때로는 주변 사람들과 함께 문제를 나누는 것이 필요하다는 점을 기억해보세요.',
        },
      ],
    },
    {
      id: 4,
      text: '실수가 드러나면서 회사에 큰 피해가 발생했어요. 이제 어떻게 할까요?',
      choices: [
        {
          id: 1,
          text: '책임을 인정하고 진심으로 사과한다.',
          nextChapterId: 7,
          emotionalImpact: { stress: 15, happiness: -10, confidence: -10, anxiety: 20 },
          message:
            '책임을 인정하고 진심으로 사과했지만, 이미 큰 피해가 발생해버렸어요. 이번 경험을 바탕으로 앞으로의 개선 방안을 마련하는 것이 중요해요.',
        },
        {
          id: 2,
          text: '책임을 회피하며 변명을 한다.',
          nextChapterId: 8,
          emotionalImpact: { stress: 20, happiness: -15, confidence: -20, anxiety: 25 },
          message:
            '책임을 회피하며 변명했지만, 오히려 신뢰를 잃고 문제가 더 커졌어요. 이번 경험을 통해 책임감 있는 자세가 얼마나 중요한지 깨달을 수 있었으면 좋겠어요.',
        },
      ],
    },
    {
      id: 5,
      text: '팀과 함께 힘을 합쳐 문제를 해결하니, 업무 성과가 크게 개선되었어요. 축하합니다!',
      isEnding: true,
      choices: [],
    },
    {
      id: 6,
      text: '앞으로 같은 실수를 막기 위해 철저한 계획을 세우고, 다시는 반복하지 않겠다고 다짐했어요. 멋진 자세입니다!',
      isEnding: true,
      choices: [],
    },
    {
      id: 7,
      text: '늦게 보고한 것에 대한 아쉬움이 남지만, 문제는 결국 해결되었어요. 다음에는 신속하게 소통해보세요.',
      isEnding: true,
      choices: [],
    },
    {
      id: 8,
      text: '책임 회피와 잘못된 선택으로 인해 신뢰를 잃고 큰 손실을 겪었어요. 이번 경험을 통해 더 성숙한 선택을 하길 바랍니다.',
      isEnding: true,
      choices: [],
    },
  ],
};
