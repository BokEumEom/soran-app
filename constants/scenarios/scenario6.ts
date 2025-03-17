import { Scenario } from '@/types/scenario';

export const scenario6: Scenario = {
  id: 6,
  title: '업무에서 성과를 인정받지 못했을 때',
  description: '열심히 일했지만 보상이 따르지 않는 상황이에요. 이제 어떻게 대처할지 한 번 고민해볼까요?',
  chapters: [
    {
      id: 1,
      text: '열심히 일했지만 성과가 인정받지 못했어요. 어떻게 할까요?',
      choices: [
        {
          id: 1,
          text: '상사에게 피드백을 요청한다.',
          nextChapterId: 2,
          emotionalImpact: { stress: -10, happiness: 5, confidence: 10, anxiety: -5 },
          message: '상사에게 직접 피드백을 요청했어요. 덕분에 자신의 강점을 알게 되고, 앞으로 어떻게 발전할지 방향도 잡을 수 있었답니다. 꾸준한 소통이 성장의 밑거름이 돼요.',
        },
        {
          id: 2,
          text: '더 노력하여 다음 기회를 노린다.',
          nextChapterId: 3,
          emotionalImpact: { stress: -5, happiness: 5, confidence: 15, anxiety: -5 },
          message: '노력을 계속하며 다음 기회를 준비했어요. 경험을 통해 자신감이 쌓이고, 앞으로 더 나은 결과를 기대할 수 있을 거예요.',
        },
        {
          id: 3,
          text: '포기하고 이직을 고려한다.',
          nextChapterId: 4,
          emotionalImpact: { stress: 10, happiness: -10, confidence: -5, anxiety: 15 },
          message: '현재 상황에 실망해 이직을 고민하게 되었어요. 이로 인해 스트레스가 커졌지만, 앞으로는 현 상황을 개선할 방법도 함께 모색해보는 게 좋을 것 같아요.',
        },
      ],
    },
    {
      id: 2,
      text: '상사는 당신의 노력을 잘 인지하지 못한다고 해요. 다음에는 어떻게 하실 건가요?',
      choices: [
        {
          id: 1,
          text: '자신의 성과를 정리하여 보고한다.',
          nextChapterId: 5,
          emotionalImpact: { stress: -10, happiness: 10, confidence: 15, anxiety: -10 },
          message: '자신의 성과를 체계적으로 정리해 보고하니, 상사가 당신의 노력을 인정하기 시작했어요. 앞으로도 꾸준한 기록이 큰 도움이 될 거예요.',
        },
        {
          id: 2,
          text: '팀과의 협업을 강화한다.',
          nextChapterId: 6,
          emotionalImpact: { stress: -5, happiness: 5, confidence: 10, anxiety: -5 },
          message: '팀원들과의 협업을 통해 긍정적인 분위기를 만들었어요. 함께 노력하면 성과가 자연스럽게 인정받을 수 있답니다.',
        },
      ],
    },
    {
      id: 3,
      text: '자신을 격려하며 앞으로의 성장을 위해 무엇을 해볼까요?',
      choices: [
        {
          id: 1,
          text: '추가적인 교육이나 자격증을 취득한다.',
          nextChapterId: 5,
          emotionalImpact: { stress: -10, happiness: 15, confidence: 20, anxiety: -10 },
          message: '추가 교육과 자격증 취득으로 전문성을 높였어요. 덕분에 자신감이 커지고, 앞으로 성과가 인정받을 가능성도 높아졌답니다.',
        },
        {
          id: 2,
          text: '새로운 프로젝트를 자발적으로 맡는다.',
          nextChapterId: 6,
          emotionalImpact: { stress: -5, happiness: 10, confidence: 15, anxiety: -5 },
          message: '새로운 프로젝트에 도전하며 팀의 신뢰를 얻었어요. 적극적인 도전이 긍정적인 변화를 이끌어줄 거예요.',
        },
      ],
    },
    {
      id: 4,
      text: '이직을 고민하게 되었어요. 이제 어떻게 하실 건가요?',
      choices: [
        {
          id: 1,
          text: '이력서를 업데이트하고 구직 활동을 시작한다.',
          nextChapterId: 7,
          emotionalImpact: { stress: 10, happiness: -10, confidence: -10, anxiety: 15 },
          message: '이직을 위해 이력서를 업데이트하며 구직 활동을 시작했지만, 불안과 스트레스가 커졌어요. 앞으로는 현 직장에서 문제를 먼저 해결할 방법도 고민해보세요.',
        },
        {
          id: 2,
          text: '현재 직장의 문제를 해결하려고 노력한다.',
          nextChapterId: 6,
          emotionalImpact: { stress: -5, happiness: 5, confidence: 10, anxiety: -5 },
          message: '상사와 팀과 함께 문제를 해결하려고 노력했어요. 이러한 꾸준한 개선 노력은 결국 성과로 이어질 가능성이 높답니다.',
        },
      ],
    },
    {
      id: 5,
      text: '성과가 인정받으며 업무에 대한 만족감이 높아졌어요.',
      isEnding: true,
      choices: [],
    },
    {
      id: 6,
      text: '팀원들과 협업을 통해 성과를 높이고, 다시 인정받게 되었어요.',
      isEnding: true,
      choices: [],
    },
    {
      id: 7,
      text: '이직을 결정했지만 새로운 직장을 찾는 과정에서 스트레스가 쌓였어요.',
      isEnding: true,
      choices: [],
    },
  ],
};
