Search.setIndex({docnames:["api","api/pydra.engine","api/pydra.engine.audit","api/pydra.engine.boutiques","api/pydra.engine.core","api/pydra.engine.graph","api/pydra.engine.helpers","api/pydra.engine.helpers_file","api/pydra.engine.helpers_state","api/pydra.engine.specs","api/pydra.engine.state","api/pydra.engine.submitter","api/pydra.engine.task","api/pydra.engine.workers","api/pydra.mark","api/pydra.mark.functions","api/pydra.tasks","api/pydra.utils","api/pydra.utils.messenger","api/pydra.utils.profiler","changes","combiner","components","index","input_spec","output_spec","state","user_guide"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,sphinx:56},filenames:["api.rst","api/pydra.engine.rst","api/pydra.engine.audit.rst","api/pydra.engine.boutiques.rst","api/pydra.engine.core.rst","api/pydra.engine.graph.rst","api/pydra.engine.helpers.rst","api/pydra.engine.helpers_file.rst","api/pydra.engine.helpers_state.rst","api/pydra.engine.specs.rst","api/pydra.engine.state.rst","api/pydra.engine.submitter.rst","api/pydra.engine.task.rst","api/pydra.engine.workers.rst","api/pydra.mark.rst","api/pydra.mark.functions.rst","api/pydra.tasks.rst","api/pydra.utils.rst","api/pydra.utils.messenger.rst","api/pydra.utils.profiler.rst","changes.rst","combiner.rst","components.rst","index.rst","input_spec.rst","output_spec.rst","state.rst","user_guide.rst"],objects:{"":{pydra:[0,0,0,"-"]},"pydra.engine":{AuditFlag:[1,2,1,""],DockerTask:[1,2,1,""],ShellCommandTask:[1,2,1,""],Submitter:[1,2,1,""],Workflow:[1,2,1,""],audit:[2,0,0,"-"],boutiques:[3,0,0,"-"],core:[4,0,0,"-"],graph:[5,0,0,"-"],helpers:[6,0,0,"-"],helpers_file:[7,0,0,"-"],helpers_state:[8,0,0,"-"],specs:[9,0,0,"-"],state:[10,0,0,"-"],submitter:[11,0,0,"-"],task:[12,0,0,"-"],workers:[13,0,0,"-"]},"pydra.engine.AuditFlag":{ALL:[1,3,1,""],NONE:[1,3,1,""],PROV:[1,3,1,""],RESOURCE:[1,3,1,""]},"pydra.engine.DockerTask":{container_args:[1,4,1,""],init:[1,3,1,""]},"pydra.engine.ShellCommandTask":{cmdline:[1,4,1,""],command_args:[1,4,1,""],input_spec:[1,3,1,""],output_spec:[1,3,1,""]},"pydra.engine.Submitter":{close:[1,5,1,""],submit:[1,5,1,""],submit_workflow:[1,5,1,""]},"pydra.engine.Workflow":{add:[1,5,1,""],checksum:[1,4,1,""],create_connections:[1,5,1,""],create_dotfile:[1,5,1,""],graph_sorted:[1,4,1,""],nodes:[1,4,1,""],set_output:[1,5,1,""]},"pydra.engine.audit":{Audit:[2,2,1,""]},"pydra.engine.audit.Audit":{audit_check:[2,5,1,""],audit_message:[2,5,1,""],finalize_audit:[2,5,1,""],monitor:[2,5,1,""],start_audit:[2,5,1,""]},"pydra.engine.boutiques":{BoshTask:[3,2,1,""]},"pydra.engine.core":{TaskBase:[4,2,1,""],Workflow:[4,2,1,""],is_lazy:[4,1,1,""],is_task:[4,1,1,""],is_workflow:[4,1,1,""]},"pydra.engine.core.TaskBase":{audit_flags:[4,3,1,""],cache_dir:[4,4,1,""],cache_locations:[4,4,1,""],can_resume:[4,4,1,""],checksum:[4,4,1,""],checksum_states:[4,5,1,""],combine:[4,5,1,""],done:[4,4,1,""],errored:[4,4,1,""],generated_output_names:[4,4,1,""],get_input_el:[4,5,1,""],help:[4,5,1,""],output_dir:[4,4,1,""],output_names:[4,4,1,""],pickle_task:[4,5,1,""],result:[4,5,1,""],set_state:[4,5,1,""],split:[4,5,1,""],uid:[4,4,1,""],version:[4,4,1,""]},"pydra.engine.core.Workflow":{add:[4,5,1,""],checksum:[4,4,1,""],create_connections:[4,5,1,""],create_dotfile:[4,5,1,""],graph_sorted:[4,4,1,""],nodes:[4,4,1,""],set_output:[4,5,1,""]},"pydra.engine.graph":{DiGraph:[5,2,1,""]},"pydra.engine.graph.DiGraph":{add_edges:[5,5,1,""],add_edges_description:[5,5,1,""],add_nodes:[5,5,1,""],calculate_max_paths:[5,5,1,""],copy:[5,5,1,""],create_dotfile_detailed:[5,5,1,""],create_dotfile_nested:[5,5,1,""],create_dotfile_simple:[5,5,1,""],edges:[5,4,1,""],edges_names:[5,4,1,""],export_graph:[5,5,1,""],nodes:[5,4,1,""],nodes_details:[5,4,1,""],nodes_names_map:[5,4,1,""],remove_nodes:[5,5,1,""],remove_nodes_connections:[5,5,1,""],remove_previous_connections:[5,5,1,""],remove_successors_nodes:[5,5,1,""],sorted_nodes:[5,4,1,""],sorted_nodes_names:[5,4,1,""],sorting:[5,5,1,""]},"pydra.engine.helpers":{PydraFileLock:[6,2,1,""],argstr_formatting:[6,1,1,""],copyfile_workflow:[6,1,1,""],create_checksum:[6,1,1,""],custom_validator:[6,1,1,""],ensure_list:[6,1,1,""],execute:[6,1,1,""],gather_runtime_info:[6,1,1,""],get_available_cpus:[6,1,1,""],get_open_loop:[6,1,1,""],hash_function:[6,1,1,""],hash_value:[6,1,1,""],load_and_run:[6,1,1,""],load_and_run_async:[6,1,1,""],load_result:[6,1,1,""],load_task:[6,1,1,""],make_klass:[6,1,1,""],output_from_inputfields:[6,1,1,""],position_sort:[6,1,1,""],print_help:[6,1,1,""],read_and_display:[6,1,1,""],read_and_display_async:[6,1,1,""],read_stream_and_display:[6,1,1,""],record_error:[6,1,1,""],save:[6,1,1,""],task_hash:[6,1,1,""]},"pydra.engine.helpers_file":{copyfile:[7,1,1,""],copyfile_input:[7,1,1,""],copyfiles:[7,1,1,""],ensure_list:[7,1,1,""],get_related_files:[7,1,1,""],hash_dir:[7,1,1,""],hash_file:[7,1,1,""],is_container:[7,1,1,""],is_existing_file:[7,1,1,""],is_local_file:[7,1,1,""],on_cifs:[7,1,1,""],related_filetype_sets:[7,6,1,""],split_filename:[7,1,1,""],template_update:[7,1,1,""],template_update_single:[7,1,1,""]},"pydra.engine.helpers_state":{PydraStateError:[8,7,1,""],add_name_combiner:[8,1,1,""],add_name_splitter:[8,1,1,""],combine_final_groups:[8,1,1,""],converter_groups_to_input:[8,1,1,""],flatten:[8,1,1,""],input_shape:[8,1,1,""],inputs_types_to_dict:[8,1,1,""],iter_splits:[8,1,1,""],map_splits:[8,1,1,""],remove_inp_from_splitter_rpn:[8,1,1,""],rpn2splitter:[8,1,1,""],splits:[8,1,1,""],splits_groups:[8,1,1,""],splitter2rpn:[8,1,1,""]},"pydra.engine.specs":{BaseSpec:[9,2,1,""],ContainerSpec:[9,2,1,""],Directory:[9,2,1,""],DockerSpec:[9,2,1,""],File:[9,2,1,""],FunctionSpec:[9,2,1,""],LazyField:[9,2,1,""],MultiInputFile:[9,2,1,""],MultiInputObj:[9,2,1,""],MultiOutputFile:[9,2,1,""],MultiOutputObj:[9,2,1,""],Result:[9,2,1,""],Runtime:[9,2,1,""],RuntimeSpec:[9,2,1,""],ShellOutSpec:[9,2,1,""],ShellSpec:[9,2,1,""],SingularitySpec:[9,2,1,""],SpecInfo:[9,2,1,""],TaskHook:[9,2,1,""],attr_fields:[9,1,1,""],attr_fields_dict:[9,1,1,""],donothing:[9,1,1,""],path_to_string:[9,1,1,""]},"pydra.engine.specs.BaseSpec":{check_fields_input_spec:[9,5,1,""],check_metadata:[9,5,1,""],collect_additional_outputs:[9,5,1,""],copyfile_input:[9,5,1,""],hash:[9,4,1,""],retrieve_values:[9,5,1,""],template_update:[9,5,1,""]},"pydra.engine.specs.ContainerSpec":{bindings:[9,3,1,""],container:[9,3,1,""],container_xargs:[9,3,1,""],image:[9,3,1,""]},"pydra.engine.specs.DockerSpec":{container:[9,3,1,""]},"pydra.engine.specs.FunctionSpec":{check_metadata:[9,5,1,""]},"pydra.engine.specs.LazyField":{get_value:[9,5,1,""]},"pydra.engine.specs.MultiInputObj":{converter:[9,5,1,""]},"pydra.engine.specs.MultiOutputObj":{converter:[9,5,1,""]},"pydra.engine.specs.Result":{errored:[9,3,1,""],get_output_field:[9,5,1,""],output:[9,3,1,""],runtime:[9,3,1,""]},"pydra.engine.specs.Runtime":{cpu_peak_percent:[9,3,1,""],rss_peak_gb:[9,3,1,""],vms_peak_gb:[9,3,1,""]},"pydra.engine.specs.RuntimeSpec":{container:[9,3,1,""],network:[9,3,1,""],outdir:[9,3,1,""]},"pydra.engine.specs.ShellOutSpec":{collect_additional_outputs:[9,5,1,""],generated_output_names:[9,5,1,""],return_code:[9,3,1,""],stderr:[9,3,1,""],stdout:[9,3,1,""]},"pydra.engine.specs.ShellSpec":{args:[9,3,1,""],check_metadata:[9,5,1,""],executable:[9,3,1,""],retrieve_values:[9,5,1,""]},"pydra.engine.specs.SingularitySpec":{container:[9,3,1,""]},"pydra.engine.specs.SpecInfo":{bases:[9,3,1,""],fields:[9,3,1,""],name:[9,3,1,""]},"pydra.engine.specs.TaskHook":{post_run:[9,3,1,""],post_run_task:[9,3,1,""],pre_run:[9,3,1,""],pre_run_task:[9,3,1,""],reset:[9,5,1,""]},"pydra.engine.state":{State:[10,2,1,""]},"pydra.engine.state.State":{combiner:[10,4,1,"id0"],combiner_validation:[10,5,1,""],current_combiner:[10,4,1,""],current_combiner_all:[10,4,1,""],current_splitter:[10,4,1,""],current_splitter_rpn:[10,4,1,""],final_combined_ind_mapping:[10,3,1,""],group_for_inputs:[10,3,1,""],group_for_inputs_final:[10,3,1,""],groups_stack_final:[10,3,1,""],inner_inputs:[10,4,1,"id1"],inputs_ind:[10,3,1,""],name:[10,3,1,""],other_states:[10,4,1,"id2"],prepare_inputs:[10,5,1,""],prepare_states:[10,5,1,""],prepare_states_combined_ind:[10,5,1,""],prepare_states_ind:[10,5,1,""],prepare_states_val:[10,5,1,""],prev_state_combiner:[10,4,1,""],prev_state_combiner_all:[10,4,1,""],prev_state_splitter:[10,4,1,""],prev_state_splitter_rpn:[10,4,1,""],prev_state_splitter_rpn_compact:[10,4,1,""],set_input_groups:[10,5,1,""],splitter:[10,4,1,"id3"],splitter_final:[10,4,1,"id4"],splitter_rpn:[10,4,1,"id5"],splitter_rpn_compact:[10,4,1,"id6"],splitter_rpn_final:[10,4,1,""],splitter_validation:[10,5,1,""],states_ind:[10,3,1,""],states_val:[10,3,1,""],update_connections:[10,5,1,""]},"pydra.engine.submitter":{Submitter:[11,2,1,""],get_runnable_tasks:[11,1,1,""],is_runnable:[11,1,1,""]},"pydra.engine.submitter.Submitter":{close:[11,5,1,""],submit:[11,5,1,""],submit_workflow:[11,5,1,""]},"pydra.engine.task":{ContainerTask:[12,2,1,""],DockerTask:[12,2,1,""],FunctionTask:[12,2,1,""],ShellCommandTask:[12,2,1,""],SingularityTask:[12,2,1,""]},"pydra.engine.task.ContainerTask":{bind_paths:[12,5,1,""],binds:[12,5,1,""],container_check:[12,5,1,""]},"pydra.engine.task.DockerTask":{container_args:[12,4,1,""],init:[12,3,1,""]},"pydra.engine.task.ShellCommandTask":{cmdline:[12,4,1,""],command_args:[12,4,1,""],input_spec:[12,3,1,""],output_spec:[12,3,1,""]},"pydra.engine.task.SingularityTask":{container_args:[12,4,1,""],init:[12,3,1,""]},"pydra.engine.workers":{ConcurrentFuturesWorker:[13,2,1,""],DaskWorker:[13,2,1,""],DistributedWorker:[13,2,1,""],SerialPool:[13,2,1,""],SerialWorker:[13,2,1,""],SlurmWorker:[13,2,1,""],Worker:[13,2,1,""]},"pydra.engine.workers.ConcurrentFuturesWorker":{close:[13,5,1,""],exec_as_coro:[13,5,1,""],run_el:[13,5,1,""]},"pydra.engine.workers.DaskWorker":{close:[13,5,1,""],exec_dask:[13,5,1,""],run_el:[13,5,1,""]},"pydra.engine.workers.DistributedWorker":{fetch_finished:[13,5,1,""],max_jobs:[13,3,1,""]},"pydra.engine.workers.SerialPool":{done:[13,5,1,""],result:[13,5,1,""],submit:[13,5,1,""]},"pydra.engine.workers.SerialWorker":{close:[13,5,1,""],run_el:[13,5,1,""]},"pydra.engine.workers.SlurmWorker":{run_el:[13,5,1,""]},"pydra.engine.workers.Worker":{close:[13,5,1,""],fetch_finished:[13,5,1,""],run_el:[13,5,1,""]},"pydra.mark":{functions:[15,0,0,"-"]},"pydra.mark.functions":{annotate:[15,1,1,""],task:[15,1,1,""]},"pydra.utils":{messenger:[18,0,0,"-"],profiler:[19,0,0,"-"]},"pydra.utils.messenger":{AuditFlag:[18,2,1,""],FileMessenger:[18,2,1,""],Messenger:[18,2,1,""],PrintMessenger:[18,2,1,""],RemoteRESTMessenger:[18,2,1,""],RuntimeHooks:[18,2,1,""],collect_messages:[18,1,1,""],gen_uuid:[18,1,1,""],make_message:[18,1,1,""],now:[18,1,1,""],send_message:[18,1,1,""]},"pydra.utils.messenger.AuditFlag":{ALL:[18,3,1,""],NONE:[18,3,1,""],PROV:[18,3,1,""],RESOURCE:[18,3,1,""]},"pydra.utils.messenger.FileMessenger":{send:[18,5,1,""]},"pydra.utils.messenger.Messenger":{send:[18,5,1,""]},"pydra.utils.messenger.PrintMessenger":{send:[18,5,1,""]},"pydra.utils.messenger.RemoteRESTMessenger":{send:[18,5,1,""]},"pydra.utils.messenger.RuntimeHooks":{resource_monitor_post_stop:[18,3,1,""],resource_monitor_pre_start:[18,3,1,""],task_execute_post_exit:[18,3,1,""],task_execute_pre_entry:[18,3,1,""],task_run_entry:[18,3,1,""],task_run_exit:[18,3,1,""]},"pydra.utils.profiler":{ResourceMonitor:[19,2,1,""],get_max_resources_used:[19,1,1,""],get_system_total_memory_gb:[19,1,1,""],log_nodes_cb:[19,1,1,""]},"pydra.utils.profiler.ResourceMonitor":{fname:[19,4,1,""],run:[19,5,1,""],stop:[19,5,1,""]},pydra:{check_latest_version:[0,1,1,""],engine:[1,0,0,"-"],mark:[14,0,0,"-"],set_input_validator:[0,1,1,""],tasks:[16,0,0,"-"],utils:[17,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","attribute","Python attribute"],"4":["py","property","Python property"],"5":["py","method","Python method"],"6":["py","data","Python data"],"7":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:attribute","4":"py:property","5":"py:method","6":"py:data","7":"py:exception"},terms:{"0":[0,1,4,6,8,15,18,23],"1":[1,4,6,7,8,9,13,18,22,23,24,26],"2":[0,1,6,15,18,22,23,24,26],"3":[1,6,18,23,26],"4":[18,23],"5":[6,18,19,22,23],"512":22,"6":[18,23],"7":23,"8":23,"8192":7,"abstract":18,"boolean":2,"case":[2,6],"class":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,18,19,20,22,24,25],"default":[1,7,9,11,24,25],"do":[1,11,18,25],"enum":[1,18],"export":[1,4,5],"final":[4,8,10,13,21],"float":[9,15,19,22,24],"function":[0,7,8,9,14,19,20,23,25,27],"import":[10,15,21,22],"int":[4,6,9,15,18,19,24],"new":[5,6,10,13,19,23,25,27],"return":[1,2,4,5,6,7,8,9,11,12,13,15,18,19,20,22,24,25],"short":[24,25],"switch":20,"true":[1,2,4,5,6,7,8,10,11,18,22,24,25],"while":[22,23],A:[1,2,4,5,6,9,10,13,18,19,22,24,25,26],AND:2,As:[7,22,24,25],But:24,If:[1,2,4,6,7,11,24,25],In:[21,22,23,24,25,26],It:[0,4,10,21,22,23],Its:22,On:7,One:[21,22,26],The:[0,1,2,4,6,7,8,9,16,18,22,23,24,25,26],There:[22,24],These:[21,22,23,26],To:16,_br:[22,24],_connect:20,_na:10,_nb:10,_node_wip:5,_nodes_detail:5,abc:6,abl:7,about:[10,24,25],abov:24,accept:[4,19,20],access:7,accommod:22,account:[6,9],achiev:21,act:22,activti:23,actual:[1,12],acycl:[22,23],ad:[1,4,5,6,8,20,22,25,27],adapt:20,add2:22,add:[1,4,5,20,22],add_edg:5,add_edges_descript:[1,4,5],add_name_combin:8,add_name_splitt:8,add_nod:5,addit:[6,8,9,21,22,23,24,25,26],address:[10,23],administr:6,afil:7,afni:[7,23],after:[7,10,21,22,26],aggreg:[1,11,24],algorithm:[8,23],all:[1,4,5,7,8,9,10,11,18,20,21,22,24,26],all_:20,allow:[18,20,21,22,23,24],allowe_valu:6,allowed_valu:24,allowev_valu:24,alongsid:23,alreadi:[6,7,20],also:[5,7,9,10,20,21,24,26],alwai:[24,25],an:[4,6,7,9,13,20,21,22,23,24,25,26],analys:23,analyz:7,ani:[1,4,5,9,11,19,22,23,24,25],annot:[15,22],anot:22,anoth:[22,23],ant:23,api:[13,20,23],append:18,appli:[15,21],applic:[22,23,26],approach:23,ar:[1,4,5,6,7,8,9,10,19,20,21,22,23,24,25,26],arbitrari:[22,23,26],arg:[1,3,6,9,12,22],argstr:[6,22,24],argstr_format:6,argument:[1,9,12,22],arrai:20,arriv:6,art:10,assign:22,associ:[10,23],assum:[4,7,8,26],async:[1,6,11,13],asyncio:[6,13],attr:[13,20,24,25],attr_field:9,attr_fields_dict:9,attr_typ:9,attribut:[6,20,22,26],audit:[0,1,4,12,18,20,23],audit_check:2,audit_flag:[1,2,4,12],audit_messag:2,auditflag:[1,4,12,18],author:23,autom:23,automat:22,avail:[4,6,9,10,20],await:[1,11,13],ax:[8,10],axi:[8,10],azur:20,b:[6,10],back:22,backend:[1,11],base:[1,2,3,4,5,6,7,8,9,10,11,12,13,18,19,22,23,24,25,26],basespec:[1,4,9,12],basi:23,basic:[4,9,21,22],been:[4,23],befor:[1,4,10,11,24],begin:7,behavior:7,behind:[22,23],being:[19,23],below:24,bet:[22,24],bet_input_spec:[22,24],better:20,between:[5,10,22,23,24],big:20,binari:[22,24],bind:[9,12,20],bind_path:12,bool:[1,2,4,5,6,7,8,9,10,11,18,22,24,25],born:23,boshtask:[3,20],both:[4,22],bound:[9,12],boutiqu:[0,1,20],bracket:26,brain:22,brik:7,build:[18,23,24,25],built:7,busybox:22,c:[6,21,23],cach:[4,6,23],cache_dir:[1,4,12],cache_loc:[1,4,6,12,20],calcul:[1,4,5,6,10,20],calculate_max_path:5,call:[19,21,22,23,24,26],callabl:[9,12,25],callback:[12,19],can:[7,8,9,10,20,21,22,23,24,25,26],can_hardlink:7,can_resum:4,can_symlink:7,captur:[6,23],certain:19,cf:[1,11],chang:[9,20,24,25],check:[2,4,5,7,9,11,20,24],check_fields_input_spec:9,check_latest_vers:0,check_metadata:9,check_readi:5,checkpoint:4,checksum:[1,4,6,20],checksum_st:4,checkum:[1,4],child:22,chunk_len:7,ci:20,cif:7,classmethod:9,cli:[1,12],close:[1,6,11,13],cmd:6,cmdline:[1,12,20],code:[9,18,20,23],codecov:20,collect:[4,6,9,16,18,23],collect_additional_output:9,collect_messag:18,collected_path:18,colour:26,comb:21,combin:[4,6,8,10,20,21,22,23,26],combine_final_group:8,combiner_valid:10,come:10,command:[1,3,5,6,7,9,12,23,24,25,27],command_arg:[1,12,20],common:23,commun:23,compact:[10,18],compil:18,complet:[1,11,22],complex:[22,24,26],complic:26,compon:[23,27],compos:23,composit:[1,4],comput:[1,4,7,9,23],concept:[20,21,22,23,26],conceptu:23,concurr:[7,13,20],concurrentfutureswork:13,conda:12,config:12,conflict:20,connect:[1,4,5,8,10,22],consid:[19,24],consist:23,construct:[22,23],consum:23,consumpt:9,cont_dim:[4,8,10,20],contain:[1,4,5,6,7,8,9,10,12,18,20,23,24,25,27],container:[1,9,12],container_arg:[1,12,20],container_check:12,container_info:[1,3,12,22],container_path:24,container_typ:12,container_xarg:9,containerspec:9,containertask:[1,12,22,24],content:7,context:18,contribut:20,control:[22,26],convent:6,convers:[8,24],convert:[8,9,20,22,24],converter_groups_to_input:8,copi:[5,6,9,12,20,24,26],copy_related_fil:7,copyfil:[7,24],copyfile_input:[7,9],copyfile_workflow:6,core:[0,1,12,19,20],coroutin:[1,6,11,13],correct:10,could:[10,24],cover:[24,25],cpu:[6,9,20],cpu_peak_perc:9,creat:[1,2,4,5,6,7,8,10,16,20,22,23,24,25,26],create_checksum:6,create_connect:[1,4],create_dotfil:[1,4,20],create_dotfile_detail:5,create_dotfile_nest:5,create_dotfile_simpl:5,create_new:7,create_pyscript:20,creation:20,crypto:7,cryptograph:7,cur_depth:8,current:[5,6,10,20],current_combin:10,current_combiner_al:10,current_splitt:10,current_splitter_rpn:10,custom:[6,8,20,22,24,25],custom_valid:6,customis:[24,25],customiz:23,cwl:9,d:6,dask:[13,20],daskwork:13,data:[5,6,7,9,26],dataclass:[9,20],dataflow:[20,21,26,27],decad:23,declar:[20,22],declare_namespac:20,decor:[15,22,23],def:[15,22],defin:[7,22],demand:23,depend:[4,8,10],depth:[6,23],describ:[22,24,26],descript:[1,4,5,20,24,25],descriptor:[3,20],design:[9,23],dest:7,destin:7,detail:[1,4,5,22],determin:[2,10],develop:[2,23],diagram:26,dict:[2,4,6,7,8,10,12,18,24],dictionari:[5,8,10,18,19,24,25],diff:7,differ:[7,22,23,25,26],difficult:23,digraph:5,dim:4,dimens:[4,8,10],dimension:[20,21],direct:[5,22,23],directli:22,directori:[1,2,4,6,7,9,12,20,22,24],dirpath:7,disabl:[7,24],discuss:6,displai:6,distinguish:26,distribut:[1,11,13,20,23],distributedwork:13,dmtcp:12,docker:[1,7,9,12,22,23],dockerrequir:9,dockerspec:9,dockertask:[1,12,20,22],docstr:20,document:20,doe:[5,7,19,24,26],doesn:[4,10,24],domain:23,done:[4,13,26],donoth:9,dot:[5,20],dotfil:[1,4,5,20],downstream:22,driver:7,dual:22,due:[8,10],duplic:5,dure:19,e:[6,7,9,10,18,21,22,24,25,26],each:[5,8,10,21,22,23,24,25,26],eas:23,easi:23,ecosystem:[0,23],edg:5,edges_nam:5,edit:20,either:[5,7],el:9,element:[1,4,8,10,12,20,21,22,24,25,26],elements_to_remove_comb:10,elemntari:4,emb:22,empti:[20,24],enabl:[2,20,23,24],encapsul:22,encompass:23,encourag:23,end:[2,8,19,26],endpoint:18,engin:[0,19,20,26],ensur:[20,23],ensure_list:[6,7],entir:25,entrypoint:[1,11],env:12,environ:[6,12,22],envvarrequir:9,eof:6,equir:5,equival:22,error:[1,4,6,7,8,9,11,19,20,23,24],error_path:6,especi:10,etc:[1,4,24],etelementri:20,evalu:[10,26],even:22,event:6,eventloop:6,everi:[7,8,10,24],everyth:4,exampl:[6,7,15,21,22,24,25,26],except:[7,8,20],exclude_nam:9,exclus:24,exec_as_coro:13,exec_dask:13,execut:[1,6,9,11,12,13,19,22,23,24,25,26],executor:13,exist:[1,4,22,23,24],exit:9,expand:20,experiment:[13,20],explain:26,explicitli:10,export_graph:5,expos:7,ext:[5,7],extend:[1,12,22,23,26],extend_path:20,extens:[7,20,24,25],extern:[12,23],extract:[6,22],extrem:22,f:[6,7],facilit:[22,23],fail:20,failur:[7,20],fals:[0,1,4,6,7,8,9,10,11,12,13,19,24],far:19,featur:[7,22,23,26],fetch_finish:13,fft:22,fft_task:22,field1:24,field1_nam:24,field1_typ:24,field:[1,4,5,6,7,8,9,10,20,21,22,25,26,27],field_nam:[6,9],file1:[24,25],file:[4,6,9,12,18,19,20,22,23,24,25],filelist:7,filelock:6,filemesseng:18,filenam:[7,19],filenotfound:7,filenotfounderror:7,filesystem:[4,7,12],filetyp:7,fill:5,final_combined_ind_map:10,finalize_audit:2,find:7,finish:13,first:[0,21],fix:20,flag:[0,1,2,4,18,20,22,24,25],flatten:8,flda:24,fldb:24,flexibl:[23,26],fli:20,fmriprep:23,fname:[6,7,19],folder:9,follow:[5,6,21,22,26],fork:16,form:[0,6,8,10,22,25],formal:22,format:[1,4,5,6,18,20],found:7,fragment:12,framework:[6,23],freesurf:23,french:7,frequenc:19,from:[1,4,5,6,7,8,9,10,11,12,18,20,21,22,23,24,25,26],fsl:[22,23],fulfil:9,full:[4,7,10,20,21,24],fulli:23,func:[12,15],functionspec:9,functiontask:[12,15,20,22],futur:[1,11,13,20],g:[7,9,10,22,24,25],gather_runtime_info:6,gb:19,gen_uuid:18,gener:[4,6,8,9,18,22,23],generated_output_nam:[4,9],get:[1,4,5,6,8,9,10,12,13,18,19,20,22,26],get_available_cpu:[6,20],get_input_el:4,get_max_resources_us:19,get_open_loop:6,get_output_field:9,get_related_fil:7,get_runnable_task:11,get_system_total_memory_gb:19,get_valu:9,given:[6,7,9,19],global:23,goal:[23,26],graph:[0,1,4,11,18,20,22,23,26],graph_det:5,graph_sort:[1,4],greater:[7,23],group:[8,10,22,23,27],group_for_input:[8,10],group_for_inputs_fin:10,groups_stack:8,groups_stack_fin:10,guid:[20,23],gz:7,ha:[1,4,5,7,10,12,21,22,23,24,25,26],had:10,handl:[2,11,20,23],hard:[7,24],hardlink:7,hash:[6,7,9,12,20,22,23],hash_dir:[7,20],hash_fil:7,hash_funct:6,hash_valu:6,hashabl:22,have:[1,4,6,7,8,10,22,25,26],hdr:7,head:7,heart:22,help:[4,22,23],help_str:[22,24,25],helper:[0,1],helpers_fil:[0,1],helpers_st:[0,1],hide_displai:6,high:19,highest:6,histori:5,hlpst:10,home:7,hook:[9,18],host:7,how:[8,20,22],howev:[21,24],i:[9,10,18,21,26],ib:[24,25],id:[4,19],ideal:23,identifi:[6,18],ignor:7,ignore_hidden_dir:7,ignore_hidden_fil:7,illustr:22,imag:[9,22],img:7,imit:13,implement:[7,9,12,13,20,23],impos:8,improv:[20,22],in_fil:[22,24],includ:[5,7,10,22,24,25],include_this_fil:7,inconsist:7,ind:[4,6],index:[4,6,12,23],indic:[4,8,10,20],info:19,inform:[2,6,10,18,24,25],inherit:[4,9,22],init:[1,12],initi:[1,11,20],initialworkdirrequir:9,inlinejavascriptrequir:9,inlinescriptrequir:9,inner:[8,10,20,21],inner_input:[8,10],inp1:[25,26],inp2:[25,26],inp3:26,inp:[8,10],inp_field:24,input:[1,4,5,6,7,8,9,10,20,21,22,23,25,27],input_fil:22,input_shap:8,input_spec:[1,4,6,7,9,12,20,22,24,25],inputs_dict:7,inputs_ind:10,inputs_to_remov:8,inputs_types_to_dict:8,insert:[5,24],insid:[2,24],instal:20,instanc:[1,4,6,11,22],instead:[7,20,25],integ:[19,24],integr:23,intenum:18,interact:[22,23],interfac:[6,10,13,20,23],intern:[12,13,19],interpret:7,interv:19,intput:8,invok:9,involv:26,is_contain:7,is_existing_fil:7,is_lazi:4,is_local_fil:7,is_runn:11,is_task:4,is_workflow:4,isol:12,issu:20,item:7,iter:8,iter_split:8,its:[6,26],itself:23,job:13,join:0,json:[2,12,18,19,23],jsonld:18,keep:[2,7,9,10,19],keep_extens:[24,25],kei:[8,22,23,24,26],kept:20,kwarg:[1,3,4,6,9,11,12,13,18],larg:23,lazi:[4,9,22],lazyfield:9,ld:[2,18,23],ld_op:18,lead:7,least:9,length:[7,8,26],let:24,level:[6,21],librari:[22,23],lightweight:23,like:[4,22],limit:[13,20,22],line:[1,6,9,12,22,23],linearli:13,link:[5,7,18,24],list:[1,4,5,6,7,8,9,10,12,20,21,22,24,25,26],load:[6,20],load_and_run:[6,20],load_and_run_async:6,load_result:6,load_task:6,local:[12,24],locat:4,lockfil:6,log:[18,19],log_nodes_cb:19,logdir:19,logger:19,longmapsto:[21,26],look:[4,6],loop:[1,6,11,13,23,27],lowest:6,ls:22,lzin:22,lzout:[20,22],m:[22,24],made:23,mai:[21,23],main:26,make:[6,21,23],make_class:20,make_klass:6,make_messag:18,manag:[16,20,26],mandatori:[9,22,24,25],manipul:23,manual:23,map:[0,5,10,12,22,23,26],map_copyfil:7,map_split:8,mapsto:[21,26],mark:[0,5,22],mask:[22,24],mat:7,max_depth:8,max_job:13,maximum:[5,13],mb:19,md:20,mean:[22,25],mean_dev:22,meant:23,mechan:23,medatada:9,mem_mb:19,memori:[9,19,20],mention:[20,24,25],merg:[10,26],messag:[2,18,23],message_path:18,messang:20,messeng:[0,1,2,4,12,17],messenger_arg:[1,2,4,12],metadata:[6,9,22,27],meth:12,method:[4,5,7,20,21,22,26],might:[21,22,23],mind:23,minshal:7,mix:21,mlt:22,mode:[12,20],model:23,modul:[0,1,14,17,23],monitor:[1,2,12,18,19],more:[4,20,22,24,26],most:[4,22,26],mostli:8,motiv:23,mount:[7,9,12],move:20,much:20,mult:22,multiinputfil:9,multiinputobj:[9,24],multil:20,multioutputfil:9,multioutputobj:[9,24],multipl:[4,20,21,24,26],mutat:8,mutual:24,my_data:22,my_dir:22,n_proc:[6,13],name:[1,4,5,6,7,8,9,10,12,18,20,22,24,25],name_prefix:6,names_onli:6,namespac:[16,20],nativ:23,ndarrai:22,necessarili:23,need:[1,4,5,9,10,21,26],neg:[6,24],nest:[5,8,20,22,23,27],network:9,neurodock:12,neuroimag:[7,23],new_combin:10,new_edg:5,new_edge_detail:5,new_nod:5,new_other_st:10,newer:20,newfil:7,next:[20,22,26],niceman:12,nidm:18,nifti:7,nii:7,nipyp:[0,7,19,20,23],node:[1,4,5,8,9,10,12,19,20,22,23,26],nodes_detail:5,nodes_names_map:5,non:18,none:[1,2,3,4,5,6,7,8,9,10,11,12,13,18,19,20],nonneg:24,notat:[8,10],note:[21,23],notebook:20,noth:[9,20,24,25],now:[18,20,22],np:22,num_thread:19,number:[4,6,8,10,13,20],numpi:[20,22],o:[9,24],obj:[2,4,5,6,7,11,18],object:[1,2,4,5,6,7,9,10,11,13,18,22,24,25],odir:2,often:23,on_cif:7,one:[4,6,8,9,13,21,22,24,26],onli:[1,4,6,7,10,12,18,21,24,25,26],open:[18,23],openssl_sha256:7,oper:[0,7,10,26],opt:12,option:[1,2,4,8,9,10,12,18,22,24,26],order:[6,10,21,22,24,25,26],organ:23,origin:[7,8,12,23,26],originalfil:7,os:[2,6,7,9,18,20],osx:20,other:[1,4,5,7,8,20,22,23,24,25,26],other_st:[8,10],otherwis:[7,19],oudit_flag:2,out1:25,out:[21,22],out_:21,out_fil:[22,24],outcom:4,outdir:[5,9],outer:[4,10,21,27],output:[1,2,4,5,6,7,9,10,18,20,22,23,24,26,27],output_dir:[4,7,9,25],output_field_nam:[24,25],output_fil:22,output_file_templ:[7,22,24,25],output_from_inputfield:6,output_nam:4,output_spec:[1,4,6,7,9,12,24,25],over:[4,7,10,22,23,27],overhead:26,overwrit:4,pac:23,packag:[0,20,22,23],padra:20,page:23,pair:[5,7,8],pairwis:26,parallel:13,paramet:[1,2,4,5,6,7,8,9,10,11,13,18,19,22,23,26],parameter:4,parametr:4,parent:[22,24,25],parenthesi:26,pars:[9,11],part:[7,10,23,24,25],partial:[10,23],particular:[1,2,4,9],pass:[20,21,22,23,25],path:[4,5,6,7,9,12,18,20,24],path_to_str:9,pathlib:[6,9],pathlik:[2,6,9,18],peak:9,pend:13,perform:[8,19,26],physic:9,pickl:[4,6,20],pickle_task:4,pid:19,pipelin:[19,23],pkg_resourc:20,pkgutil:20,place:18,pld:18,pleas:16,plugin:[1,6,11],png:5,point:[9,12,18,22],polish:8,poll_delai:13,pool:13,popular:23,port:7,posit:[6,22,24],position_sort:6,posix:7,possibl:[24,25],post:18,post_run:9,post_run_task:9,postiv:6,power:[22,23],practic:23,pre_run:9,pre_run_task:9,precalcul:[6,7],preced:7,predecessor:5,prepar:10,prepare_input:10,prepare_st:10,prepare_states_combined_ind:10,prepare_states_ind:10,prepare_states_v:10,preprocess:23,prescrib:8,present:7,presort:5,prev:10,prev_state_combin:10,prev_state_combiner_al:10,prev_state_splitt:10,prev_state_splitter_rpn:10,prev_state_splitter_rpn_compact:10,previou:[4,8,10,21,24],previous:[1,5,11,23],print:[4,6,18],print_help:6,printmesseng:18,prioriti:6,process:[4,6,9,10,12,18,19,20],profil:[0,17],program:23,programm:23,project:[22,23],promis:9,promot:15,prone:23,propag:10,propagate_rerun:[1,4,20],proper:[6,20],properli:20,properti:[1,4,5,9,10,12,19],prov:[1,18],proven:[1,2,12,18,23],provid:[4,6,8,9,21,22,23,24,25,26],prune:5,pth:7,purpos:23,pwd:22,py2:7,py:[12,13],pydra:[0,20,21,22,24,26],pydrafilelock:6,pydrastateerror:[8,20],pyfunc:19,python:[6,12,13,20,22,23,24,26],rais:[4,7,20],raise_notfound:7,ram:[9,19],rand:22,random:22,rather:22,re:[5,10],read:[6,7,12,20],read_and_displai:6,read_and_display_async:6,read_stream_and_displai:6,readi:5,readm:20,readonli:24,recent:7,recogn:25,recombin:[22,23],record:[2,18,19],record_error:6,recreat:4,recurr:8,recurs:[6,7],redirect:18,reduc:[10,22,23,26],refactor:20,refer:5,refin:9,regard:9,regular:7,relat:[7,10,26],related_filetype_set:7,releas:23,relev:10,remot:[12,18],remoterestmesseng:18,remov:[1,5,7,8,10,11,20,24,25],remove_inp_from_splitter_rpn:8,remove_nod:5,remove_node_connect:5,remove_nodes_connect:5,remove_previous_connect:5,remove_successors_nod:5,reorgan:20,replac:4,repo:20,report:20,repres:[9,10,21,22,23,24,26],represent:[1,4,10],reproduc:[22,23],request:18,requir:[4,8,9,20,22,23,24,25,26],rerun:[1,4,6,11,12,13,20],reserv:16,reset:9,resourc:[1,2,18,19,23],resource_monitor_post_stop:18,resource_monitor_pre_start:18,resourcemonitor:19,resourcerequir:9,respect:22,respons:22,rest:18,restart:4,restor:6,result:[2,4,6,7,9,10,13,20,21,22,23],resum:12,retriev:4,retrieve_valu:9,return_cod:9,return_input:4,returnhelp:4,reus:23,reusabl:23,revers:[8,24],rewrit:0,right:20,rpn2splitter:8,rpn:[8,10],rss_peak_gb:9,rst:20,run:[1,4,5,6,7,9,10,11,13,19,20,22,23],run_el:13,runnabl:[1,5,11,13,22,26],runtim:[6,9],runtimehook:18,runtimespec:9,s:[4,6,8,10,13,18,20,24,25,26,27],same:[5,7,10,21,25,26],save:6,sbatch_arg:13,scalabl:22,scalar:[10,27],schemadefrequir:9,schemat:26,scientif:[22,23],scientist:23,script:[4,22],search:23,second:[23,26],section:[21,22,24,25,26],see:[4,5,25],self:[1,2,4,5,10],semi:23,send:[1,2,11,13,18],send_messag:18,sens:21,sent:[2,25],sep:24,separ:[16,20,22,24,25],serialpool:13,serialwork:13,serv:22,server:12,set:[1,4,6,7,9,10,11,13,19,20,21,22,23,26],set_input_group:10,set_input_valid:[0,24],set_output:[1,4,22],set_stat:4,sever:[22,23],shape:8,share:[7,22,23],shell:[1,3,9,12,23,24,25,27],shellcommandrequir:9,shellcommandtask:[1,3,12,20,22,24,25],shelloutspec:[9,25],shellspec:[9,22,24],shelltask:[9,20],shorter:24,should:[7,8,9,10,22,24,25],shown:22,signific:26,similar:[23,26],similarli:25,simpl:[1,4,5,6,13,20,22,24],simplest:26,simpli:22,simplifi:20,singl:[7,9,10,18,20,21,22],singular:[9,12,20,22,23],singularityspec:9,singularitytask:[12,20,22],situat:21,slurm:[4,13,20],slurmwork:13,small:20,so:[4,8,19,20,22,26],softfilelock:6,softwar:[22,23],softwarerequir:9,some:[20,23],sophist:23,sort:[1,4,5,6],sorted_nod:5,sorted_nodes_nam:5,sourc:[4,23],spec:[0,1,4,6,7,12,20,25,27],spec_typ:7,special:[22,24,26],specif:[1,4,6,8,9,10,12,18,19,20,21,22,23,26,27],specifi:[7,8,10,12,20,21,22,24,25],specinfo:[1,4,9,12,22,24,25],sphinx:20,split:[4,7,8,10,21,22,26],split_filenam:7,split_it:8,splits_group:8,splitter2rpn:8,splitter:[4,8,10,20,21,22,27],splitter_fin:10,splitter_rpn:[8,10],splitter_rpn_compact:10,splitter_rpn_fin:10,splitter_valid:10,spm:[7,23],squar:[15,26],st:22,stack:[8,10],stackoverflow:6,standalon:[20,22,23],standard:[6,8,9,18],start:[2,5,19,24],start_audit:2,state:[0,1,4,8,11,12,18,20,23,27],state_field:[8,10],state_index:[4,9],stateless:26,states_ind:10,states_v:10,statist:[19,22],statu:[18,19],std:22,stderr:[9,25],stdev:22,stdlib:20,stdout:[9,25],step:4,sto:20,stop:19,store:[4,23],str:[1,4,6,7,9,10,18,22,24,25],stream:6,string:[6,7,9,19,24],strip:6,structur:[1,4,5,9],subclass:22,subject:7,submiss:[1,11,13],submit:[1,11,12,13],submit_workflow:[1,11],submitt:[0,1,6,20],submodul:0,subpackag:23,support:[5,6,7,20,21,22,23,24,26],symbol:7,symlink:7,syntax:[20,22,24,25,26],system:[6,7,12,13,19,20],t:[4,10,20,24],take:[6,7,9,21,24,25],task:[0,1,2,3,4,5,6,9,10,11,13,15,20,23,24,25,26,27],task_execute_post_exit:18,task_execute_pre_entri:18,task_hash:6,task_path:6,task_pkl:6,task_run_entri:18,task_run_exit:18,task_with_st:22,taskbas:[1,4,6,11,12,22],taskhook:9,technolog:22,templat:[7,9,16,20,22,24,25],template_upd:[7,9],template_update_singl:7,termin:22,test:[13,20],test_rerun:20,text:7,than:[7,22,25],thei:[5,6,21,26],them:[1,5,6,11,20],therefor:26,thi:[4,5,6,7,8,9,13,19,21,22,23,24,25,26],think:[24,25],thread:19,three:[24,25],through:[7,26],thu:22,time:[8,9,23],timestamp:18,to_job:20,todo:[1,4,6,9,18],togeth:[4,7,10,21,23,24,25],tool:[22,23],top:[24,25],total:[6,19],tp:6,track:[1,2,9,10,12,18,19,22,23],translat:8,travers:7,travi:20,treat:[22,24],truncat:18,tupl:[6,7,9,10,12,20,24,25,26],tuple2list:6,tutori:20,two:[21,22,26],txt:20,ty:[6,9],type:[1,2,4,6,7,8,9,10,11,12,13,18,19,20,22,25,27],typic:26,uid:4,under:7,uniform:23,union:[1,4,6,9,12,24],uniqu:[1,4,6,18],unit:22,unless:[6,24,25],unlik:22,unlink:7,unspecifi:6,until:[2,6,13],unwrap:[8,10],up:26,updat:[6,7,9,10,15,20],update_connect:10,us:[1,4,6,7,8,9,10,12,13,15,18,20,21,22,23,24,25,26],use_hardlink:7,user:[8,20,21,22,23,24,25,26],usual:[24,25],util:[0,1,2,4,12],v:24,val:[4,8],valid:[6,10,20,27],valu:[1,4,6,7,8,9,10,18,19,20,21,22,23,24,25,26],value_upd:6,variabl:[8,12,20],variou:21,verbos:20,version:[4,24],via:23,virtual:9,visit:6,vms_peak_gb:9,wa:[23,24,25,26],wai:[21,26],wait:[1,11],want:[21,24,25],watermark:19,we:[7,22,24],well:23,were:[7,20,23],wf:[6,9,20,22],wf_path:6,what:4,whatev:6,when:[5,7,8,9,10,18,20,21,22,26],whenev:26,where:[4,6,21,23,26],whether:[2,4,7,13],which:[4,5,6,7,8,10],wil:25,window:[7,20],wise:26,within:[11,21,22],without:[4,5,7,10,22],worflow:22,work:[6,12,20,22,23,26],worker:[0,1,11,20],workflow:[0,1,4,5,6,9,11,15,20,21,23,26,27],would:[21,26],wrap:[1,12],wrapper:[6,13],write:[1,4,6,12,18],written:[4,7,21,23],x:[21,22,26],x_1:[21,26],x_2:[21,26],x_i:21,x_n:[21,26],xor:[9,24],y1:21,y2:21,y:[21,22,26],y_1:[21,26],y_2:26,y_m:[21,26],y_n:26,you:[24,25],your:[24,25]},titles:["Library API (application programmer interface)","pydra.engine package","pydra.engine.audit module","pydra.engine.boutiques module","pydra.engine.core module","pydra.engine.graph module","pydra.engine.helpers module","pydra.engine.helpers_file module","pydra.engine.helpers_state module","pydra.engine.specs module","pydra.engine.state module","pydra.engine.submitter module","pydra.engine.task module","pydra.engine.workers module","pydra.mark package","pydra.mark.functions module","pydra.tasks package","pydra.utils package","pydra.utils.messenger module","pydra.utils.profiler module","Release Notes","Grouping Task\u2019s Output","Dataflows Components: Task and Workflow","Welcome to Pydra: A simple dataflow engine with scalable semantics\u2019s documentation!","Input Specification","Output Specification","State and Nested Loops over Input","User Guide"],titleterms:{"0":20,"1":20,"2":20,"3":20,"4":20,"5":20,"6":20,"7":20,"8":20,"function":[15,22],"new":[7,24],A:23,ad:24,api:0,applic:0,audit:2,boutiqu:3,command:22,compon:22,contain:22,content:23,copi:7,core:4,dataflow:[22,23],document:23,engin:[1,2,3,4,5,6,7,8,9,10,11,12,13,23],exist:7,field:24,file:7,graph:5,group:21,guid:27,helper:6,helpers_fil:7,helpers_st:8,indic:23,input:[24,26],interfac:0,librari:0,loop:26,mark:[14,15],messeng:18,metadata:[24,25],modul:[2,3,4,5,6,7,8,9,10,11,12,13,15,18,19],nest:26,note:[12,20],option:7,outer:26,output:[21,25],over:26,packag:[1,14,16,17],profil:19,programm:0,pydra:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,23],releas:20,s:[21,22,23],scalabl:23,scalar:26,semant:23,shell:22,simpl:23,spec:[9,24],specif:[24,25],splitter:26,state:[10,22,26],submitt:11,submodul:[1,14,17],subpackag:0,tabl:23,task:[12,16,21,22],type:[24,26],user:27,util:[17,18,19],valid:24,welcom:23,worker:13,workflow:22}})