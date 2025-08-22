# 配置

<!--suppress HtmlUnknownAttribute -->
<script setup>
import ConfigViewer from "../../../components/ConfigViewer.vue";
import { data } from "../../../config-spec/leaves/zhHans.data.mts";
</script>

## leaves.yml
 Leaves 配置文件存储在与核心同目录下的 `leaves.yml` 文件中  
 请妥善使用 `Ctrl + F` 搜索配置项。
::: tip

点击配置行以显示更多信息。

:::

<ConfigViewer :data=data name="leaves.yml"/>
