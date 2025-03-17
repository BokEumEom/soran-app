import { Scenario } from '@/types/scenario';

export const scenario11: Scenario = {
  id: 11,
  title: '부당한 지시와 상사와의 갈등 해결',
  description: '상사로부터 부당한 업무 지시를 받았을 때, 어떻게 대처할지 함께 고민해봐요.',
  chapters: [
    {
      id: 1,
      text: '상사가 비현실적인 업무 목표를 지시했어요. 어떻게 하실 건가요?',
      choices: [
        {
          id: 1,
          text: '상사에게 솔직하게 의견을 전달한다.',
          nextChapterId: 2,
          emotionalImpact: { stress: -10, confidence: 15, happiness: 10, anxiety: -5 },
          message:
            '솔직한 의견을 전달하자 상사가 당신의 입장을 이해하고 목표를 현실적으로 조정하기로 했어요.',
        },
        {
          id: 2,
          text: '팀원들과 함께 대안을 마련해 상사에게 제안한다.',
          nextChapterId: 3,
          emotionalImpact: { stress: -5, confidence: 10, happiness: 10, anxiety: -5 },
          message:
            '팀원들과 함께 준비한 대안을 상사에게 제안하자, 상사가 긍정적으로 검토하며 문제 해결의 실마리를 찾기 시작했어요.',
        },
        {
          id: 3,
          text: '지시에 따르며 개인적으로 부담을 감수한다.',
          nextChapterId: 4,
          emotionalImpact: { stress: 15, confidence: -10, happiness: -10, anxiety: 10 },
          message:
            '상사의 지시를 그대로 따르면서 개인적인 부담이 커지니, 스트레스가 점점 누적되고 있어요.',
        },
      ],
    },
    {
      id: 2,
      text: '상사가 당신의 의견을 받아들여 업무 목표를 조정했어요. 이제 어떻게 할까요?',
      choices: [
        {
          id: 1,
          text: '새로운 목표에 맞춰 계획을 세운다.',
          nextChapterId: 5,
          emotionalImpact: { stress: -5, confidence: 15, happiness: 15, anxiety: -5 },
          message:
            '새로운 목표에 맞춘 계획 덕분에 업무가 순조롭게 진행되고 있어요. 앞으로도 이 같은 소통이 큰 도움이 될 거예요.',
        },
        {
          id: 2,
          text: '팀원들과 목표를 공유하고 함께 협력한다.',
          nextChapterId: 6,
          emotionalImpact: { stress: -10, confidence: 20, happiness: 20, anxiety: -10 },
          message:
            '팀원들과 목표를 공유하며 협력하자, 프로젝트가 성공적으로 진행되고 있어요. 함께하면 어려움도 훨씬 수월해진답니다.',
        },
      ],
    },
    {
      id: 3,
      text: '상사가 당신의 대안을 듣고 일부 수정했지만, 근본적인 문제는 해결되지 않았어요.',
      choices: [
        {
          id: 1,
          text: '다시 상사와 대화를 시도한다.',
          nextChapterId: 5,
          emotionalImpact: { stress: -5, confidence: 5, happiness: 5, anxiety: -5 },
          message:
            '상사와 다시 대화를 나누어 일부 문제를 추가로 해결할 수 있었어요. 꾸준한 소통이 중요해요!',
        },
        {
          id: 2,
          text: '팀원들과 협력하여 문제를 자체적으로 해결한다.',
          nextChapterId: 6,
          emotionalImpact: { stress: -5, confidence: 10, happiness: 10, anxiety: -5 },
          message:
            '팀원들과 협력해 자체적으로 문제를 해결하니 업무가 원활하게 진행되고 있어요. 함께하면 큰 힘이 된답니다.',
        },
      ],
    },
    {
      id: 4,
      text: '상사의 지시에 따라 업무를 진행했지만, 업무 부담이 커져 스트레스가 점점 누적되고 있어요.',
      choices: [
        {
          id: 1,
          text: '다시 상사에게 의견을 전달하고 조정을 요청한다.',
          nextChapterId: 5,
          emotionalImpact: { stress: -10, confidence: 10, happiness: 5, anxiety: -5 },
          message:
            '추가 대화를 통해 일부 부담이 줄었지만, 여전히 미해결된 문제가 남아 있어요. 지속적인 소통이 필요해요.',
        },
        {
          id: 2,
          text: '그냥 계속해서 업무를 진행한다.',
          nextChapterId: 6,
          emotionalImpact: { stress: 15, confidence: -10, happiness: -10, anxiety: 10 },
          message:
            '업무를 계속 진행하니 스트레스와 피로가 점점 누적되어 건강에 악영향을 주고 있어요. 상황을 다시 점검해보세요.',
        },
      ],
    },
    {
      id: 5,
      text: '상사와의 대화 후, 업무 목표가 현실적으로 조정되었고 프로젝트가 순조롭게 진행되고 있어요.',
      isEnding: true,
      choices: [],
    },
    {
      id: 6,
      text: '업무 부담이 너무 커져 결국 과도한 스트레스로 인해 건강에 문제가 생기기 시작했어요.',
      isEnding: true,
      choices: [],
    },
  ],
};
