import { Scenario } from '@/types/scenario';

export const scenario4: Scenario = {
  id: 4,
  title: '새로운 팀 리더로서의 첫날',
  description: '새 팀의 리더로 임명되었는데, 팀원들이 아직 당신을 경계하고 있어요. 어떻게 대응할까요?',
  chapters: [
    {
      id: 1,
      text: '새 팀의 리더로 임명되었는데, 팀원들이 아직 당신을 경계하고 있어요. 어떻게 대응할까요?',
      choices: [
        {
          id: 1,
          text: '팀원들과 개별 면담을 통해 소통한다.',
          nextChapterId: 2,
          emotionalImpact: { stress: -10, happiness: 10, confidence: 10, anxiety: -5 },
          message: '개별 면담을 통해 팀원들의 이야기를 듣고 신뢰를 쌓기 시작했어요. 앞으로도 꾸준히 피드백을 주고받으며 소통한다면, 더욱 따뜻한 분위기를 만들어갈 수 있을 거예요.',
        },
        {
          id: 2,
          text: '팀에게 새로운 목표를 제시한다.',
          nextChapterId: 3,
          emotionalImpact: { stress: 5, happiness: -5, confidence: 5, anxiety: 5 },
          message: '새로운 목표를 제시했지만 팀원들이 부담을 느꼈어요. 다음에는 목표 설정 전에 팀원들의 의견을 들어보고, 부담을 덜어줄 수 있는 방법을 함께 고민해보세요.',
        },
        {
          id: 3,
          text: '팀원들의 태도를 무시하고 업무에 집중한다.',
          nextChapterId: 4,
          emotionalImpact: { stress: 10, happiness: -10, confidence: -5, anxiety: 10 },
          message: '팀원들의 태도를 무시하니 분위기가 더욱 경직되었어요. 앞으로는 소통을 통해 서로의 생각을 공유하며 신뢰를 쌓아가는 노력이 필요해요.',
        },
      ],
    },
    {
      id: 2,
      text: '팀원들이 조금씩 마음을 열기 시작했어요. 다음 단계로 어떻게 할까요?',
      choices: [
        {
          id: 1,
          text: '팀워크를 강화하기 위한 활동을 계획한다.',
          nextChapterId: 5,
          emotionalImpact: { stress: -5, happiness: 15, confidence: 10, anxiety: -5 },
          message: '팀워크 강화 활동 덕분에 분위기가 한층 밝아졌어요. 앞으로도 정기적인 팀 활동과 소통을 통해 유대감을 더욱 깊게 만들어보세요.',
        },
        {
          id: 2,
          text: '업무 프로세스를 개선한다.',
          nextChapterId: 6,
          emotionalImpact: { stress: 0, happiness: 5, confidence: 5, anxiety: 0 },
          message: '업무 프로세스 개선을 시도했지만, 팀원들이 적응하는 데 어려움을 겪고 있어요. 다음에는 개선 과정을 팀과 함께 공유하며 점진적으로 변화를 도입해보세요.',
        },
      ],
    },
    {
      id: 3,
      text: '팀원들이 새로운 목표에 부담을 느끼고 있어요. 어떻게 대응할까요?',
      choices: [
        {
          id: 1,
          text: '목표를 조정하고 필요한 지원을 약속한다.',
          nextChapterId: 5,
          emotionalImpact: { stress: -10, happiness: 10, confidence: 10, anxiety: -5 },
          message: '목표를 조정하고 지원을 약속하니 팀원들이 안심하기 시작했어요. 앞으로도 팀의 의견을 반영하며 함께 목표를 세워보세요.',
        },
        {
          id: 2,
          text: '목표 달성을 위해 강하게 압박한다.',
          nextChapterId: 6,
          emotionalImpact: { stress: 15, happiness: -10, confidence: -5, anxiety: 10 },
          message: '강한 압박은 팀원들에게 큰 스트레스를 주었어요. 다음에는 동기 부여와 지원을 병행하는 방안을 고려해보면 좋겠어요.',
        },
      ],
    },
    {
      id: 4,
      text: '팀의 성과가 점차 떨어지고 있어요. 어떻게 대응할까요?',
      choices: [
        {
          id: 1,
          text: '팀원들과 다시 소통하며 문제점을 파악한다.',
          nextChapterId: 5,
          emotionalImpact: { stress: -10, happiness: 10, confidence: 10, anxiety: -5 },
          message: '팀원들과 소통하며 문제점을 파악하니 상황이 개선되기 시작했어요. 앞으로도 정기적인 대화를 통해 문제를 미리 예방해보세요.',
        },
        {
          id: 2,
          text: '상사에게 도움을 요청한다.',
          nextChapterId: 6,
          emotionalImpact: { stress: 5, happiness: -5, confidence: 0, anxiety: 5 },
          message: '상사에게 도움을 요청했지만, 팀원들이 오히려 소외감을 느꼈어요. 다음에는 팀 내부에서 먼저 해결책을 모색하는 것이 좋겠어요.',
        },
      ],
    },
    {
      id: 5,
      text: '팀워크를 통해 팀의 성과가 크게 향상되었어요. 앞으로도 이런 분위기를 유지할 수 있도록 꾸준한 소통과 지원에 힘써보세요.',
      isEnding: true,
      choices: [],
    },
    {
      id: 6,
      text: '팀원들이 당신의 리더십에 불만을 품고 있어요. 앞으로는 팀원들과의 소통을 강화하고, 그들의 의견을 반영하는 노력이 필요해요.',
      isEnding: true,
      choices: [],
    },
  ],
};
